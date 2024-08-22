import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ HeaderComponent ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  languageData = inject(LanguageService);
  
  text: any = {
    en: {
      greeting: "Hello! I am Pascale",
      jobTitle: "FRONTEND<br>DEVELOPER",
    },
    ge: {
      greeting: "Hello! I heisse Pascale",
      jobTitle: "FRONTEND<br>ENTWICKLERIN",
    }
  }
}
