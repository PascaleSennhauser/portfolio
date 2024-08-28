import { Component, inject, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { WINDOW } from '../../services/window-token';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
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
  @HostListener('window:resize', ['$event'])


  /**
   * This method is called, when the window gets resized.
   * When the window is bigger than 1000px, it's a big screen and the width gets adapted from the image.
   */
  onResize(event: Event) {
    this.isBigScreen = this._window.innerWidth > 1000;
  }

}
