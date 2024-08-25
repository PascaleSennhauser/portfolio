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


  /**
   * This constructor creates an instance of the component.
   * @param router - The Angular Router used for navigation.
   */
  constructor(private router: Router) {
  }


  /**
   * This method sets the language in the language service.
   * @param language - The selected language 'de' or 'en'.
   */
  setLanguage(language: string) {
    this.languageData.setLanguage(language);
  }


  /**
   * This method navigates to the landing page with the current language.
   * Constructs the URL by appending '/mainComponent' to the current language.
   */
  goToLandingPage() {
    this.router.navigateByUrl(this.languageData.currentLanguage + '/mainComponent');
  }
}
