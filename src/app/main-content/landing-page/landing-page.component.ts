import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent {
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
