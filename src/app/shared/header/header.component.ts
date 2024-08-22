import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  languageData = inject(LanguageService);
  @Input() pageImprint = false;
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

  constructor(private router: Router) {
  }

  setLanguage(language: string) {
    this.languageData.setLanguage(language);
  }

  goToLandingPage() {
    this.router.navigateByUrl(this.languageData.currentLanguage + '/mainComponent');
  }
}
