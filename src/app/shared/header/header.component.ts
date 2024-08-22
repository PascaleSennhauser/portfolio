import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  languageData = inject(LanguageService);
  currentLanguage: any = 'en';

  constructor() {
    this.languageData.languageSubject.subscribe((language) => {
      this.currentLanguage = language;
    })
  }

  text: any = {
    en: {
      aboutMe: "About me",
      skillSet: "Skill set",
      myWork: "My work",
      german: "GE",
      english: "EN"
    },
    ge: {
      aboutMe: "Über mich",
      skillSet: "Fähigkeiten",
      myWork: "Meine Projekte",
      german: "DE",
      english: "EN"
    }
  }

  setLanguage(language: string) {
    this.languageData.setLanguage(language);
  }
}
