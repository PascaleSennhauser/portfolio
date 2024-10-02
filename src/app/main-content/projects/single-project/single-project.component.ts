import { Component, Input, inject, HostListener, ElementRef } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { WINDOW } from '../../../services/window-token';
import { RouterLink } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
  animations: [
    trigger('imgEnter', [
      state('enter', style({ transform: 'scale(1)' })),
      state('leave', style({ transform: 'scale(0)' })),
      transition('leave => enter', [animate('500ms ease-in')])
    ])
  ]
})

export class SingleProjectComponent {
  translate: TranslateService = inject(TranslateService);
  private _window = inject(WINDOW);
  @Input() project: Project = {
    name: 'Join',
    folderPath: '/join.pascale-sennhauser.ch/index.html',
    usedTechnologies: ['JavaScript', 'HTML', 'CSS'],
    description: {
      en: 'Task manager inspried by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      ge: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen und weisen Sie Benutzer und Kategorien zu.',
    },
    imgSrc: 'assets/img/projects/join.png',
    linkGitHub: 'https://github.com/PascaleSennhauser/join.git'
  };
  @Input() index: number = 0;
  isBigScreen = this._window.innerWidth > 1000;
  isLandingPageMobile = this._window.innerWidth <= 1025;
  isInSight: 'enter' | 'leave' = 'enter';


  /**
   * This constructor creates an instance of the component.
   * @param el - The reference to the native DOM elment of the component.
   */
  constructor(private el: ElementRef) {
  }


  @HostListener('window:scroll', [])


  /**
   * This method handles the scroll event and checks if the element with the class 'title' is within the viewport.
   * It updates the 'isInSight' property accordingly.
   * Through that the animation is shown, when the element is in the viewport. 
   */
  onWindowScroll() {
    const titleElement = this.el.nativeElement.querySelector('.img');
    if (titleElement) {
      const rect = titleElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        this.isInSight = 'enter';
      } else {
        this.isInSight = 'leave';
      }
    }
  }


  @HostListener('window:resize', ['$event'])
  /**
   * This method is called, when the window gets resized.
   * When the window is bigger than 1000px, it's a big screen and the project description gets adapted.
   */
  onResize(event: Event) {
    this.isBigScreen = this._window.innerWidth > 1000;
    this.isLandingPageMobile = this._window.innerWidth <= 1025;
  }
}
