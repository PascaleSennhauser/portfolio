import { Component, HostListener, ElementRef, inject } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { Project } from '../../interfaces/project.interface';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('titleEnter', [
      state('enter', style({ transform: 'scale(1)' })),
      state('leave', style({ transform: 'scale(0)' })),
      transition('leave => enter', [animate('500ms ease-in')])
    ])
  ]
})

export class ProjectsComponent {
  translate: TranslateService = inject(TranslateService);
  projects: Array<Project> = [
    {
      name: 'Join',
      folderPath: 'https://join.pascale-sennhauser.ch',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS'],
      description: {
        en: 'Task manager inspried by the Kanban System. Create and organize tasks using drag and drop functions and assign users and categories.',
        ge: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen und weisen Sie Benutzer und Kategorien zu.',
      },
      imgSrc: 'assets/img/projects/join.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/join.git'
    },
    {
      name: 'El Pollo Loco',
      folderPath: 'https://epl.pascale-sennhauser.ch',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS'],
      description: {
        en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to get the magical Salsa Bottle back by fighting against chicken, chicks and the "Pollo Loco".',
        ge: 'Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, die magische Salsaflasche zurückzubekommen, indem du gegen Hühner, Küken und das "Pollo Loco" kämpfst.',
      },
      imgSrc: 'assets/img/projects/el-pollo-loco.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/El_Pollo_Loco.git'
    },
    {
      name: 'Pokédex',
      folderPath: 'https://pokedex.pascale-sennhauser.ch',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS', 'Api'],
      description: {
        en: 'Based on the PokéAPI library that provieds and catalogues pokémon information.',
        ge: 'Basiert auf der PokéAPI-Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
      },
      imgSrc: 'assets/img/projects/pokédex.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/Pokedex.git'
    },
    {
      name: 'Portfolio',
      folderPath: '/pascale-sennhauser.ch/index.html',
      usedTechnologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      description: {
        en: 'My portfolio page, to introduce myself and highlight my web programming skills. It\'s the page you\'re looking at right now.',
        ge: 'Mein Portfolio, um mich vorzustellen und meine Fähigkeiten in der Webprogrammierung hervorzuheben. Das ist die Seite, die Sie sich gerade ansehen.',
      },
      imgSrc: 'assets/img/projects/portfolio.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/portfolio.git'
    }
  ];
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
    const titleElement = this.el.nativeElement.querySelector('.title');
    if (titleElement) {
      const rect = titleElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        this.isInSight = 'enter';
      } else {
        this.isInSight = 'leave';
      }
    }
  }

}
