import { Component, inject } from '@angular/core';
import { HeaderMobileComponent } from "../shared/header-mobile/header-mobile.component";
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-landing-page-mobile',
  standalone: true,
  imports: [HeaderMobileComponent],
  templateUrl: './landing-page-mobile.component.html',
  styleUrl: './landing-page-mobile.component.scss'
})
export class LandingPageMobileComponent {
  languageData = inject(LanguageService);

  text: any = {
    en: {
      greeting: "Hello! I am Pascale",
      jobTitle: "FRONTEND<br>DEVELOPER",
    },
    ge: {
      greeting: "Hallo! Ich heisse Pascale",
      jobTitle: "FRONTEND<br>ENTWICKLERIN",
    }
  }

}
