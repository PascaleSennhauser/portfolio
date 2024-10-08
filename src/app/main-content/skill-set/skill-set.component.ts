import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WINDOW } from '../../services/window-token';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
  animations: [
    trigger('titleEnter', [
      state('enter', style({ transform: 'scale(1)' })),
      state('leave', style({ transform: 'scale(0)' })),
      transition('leave => enter', [animate('500ms ease-in')])
    ])
  ]
})

export class SkillSetComponent {
  skills: Array<any> = [
    {
      name: 'Angular',
      img: 'Angular.png'
    },
    {
      name: 'TypeScript',
      img: 'TypeScript.png'
    },
    {
      name: 'JavaScript',
      img: 'JavaScript.png'
    },
    {
      name: 'HTML',
      img: 'html.png'
    },
    {
      name: 'CSS',
      img: 'css.png'
    },
    {
      name: 'Sass',
      img: 'sass.png'
    },
    {
      name: 'Scrum',
      img: 'Scrum.png'
    },
    {
      name: 'Firebase',
      img: 'Firebase.png'
    },
    {
      name: 'Git',
      img: 'Git.png'
    },
    {
      name: 'REST-Api',
      img: 'Api.png'
    },
    {
      name: 'Material Design',
      img: 'Material-des.png'
    },
    {
      name: 'Figma',
      img: 'Figma.svg'
    },
    {
      name: 'Growth Mindset',
      img: 'Grow.png'
    }

  ];
  private _window = inject(WINDOW);
  translate: TranslateService = inject(TranslateService);
  showHoverInfo = false;
  isBigScreen = this._window.innerWidth > 1000;
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


  @HostListener('window:resize', ['$event'])
  /**
   * This method is called, when the window gets resized.
   * When the window is bigger than 1000px, it's a big screen and the width gets adapted from the image.
   */
  onResize(event: Event) {
    this.isBigScreen = this._window.innerWidth > 1000;
  }

}
