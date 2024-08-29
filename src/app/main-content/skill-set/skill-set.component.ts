import { Component, inject, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { WINDOW } from '../../services/window-token';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
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
  languageData = inject(LanguageService);
  private _window = inject(WINDOW);
  text: any = {
    en: {
      title: "Skill set"
    },
    ge: {
      title: "Fähigkeiten"
    }
  }
  showHoverInfo = false;
  isBigScreen = this._window.innerWidth > 1000;
  isInSight: 'enter' | 'leave' = 'enter';

  
  constructor(private el: ElementRef) {
  }


  @HostListener('window:scroll', [])
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
