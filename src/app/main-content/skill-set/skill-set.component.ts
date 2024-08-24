import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
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
    }

  ];
  languageData = inject(LanguageService);

  text: any = {
    en: {
      title: "Skill set"
    },
    ge: {
      title: "Fähigkeiten"
    }
  }

}
