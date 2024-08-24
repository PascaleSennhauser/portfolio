import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { HeaderMobileComponent } from '../../shared/header-mobile/header-mobile.component';
import { MenuOverlayMobileComponent } from "../../shared/menu-overlay-mobile/menu-overlay-mobile.component";

@Component({
  selector: 'app-landing-page-mobile',
  standalone: true,
  imports: [HeaderMobileComponent, MenuOverlayMobileComponent],
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
  openOverlayMenu: boolean = false;


  /**
   * This method sets the variable openOverlayMenu to true or false.
   * The overlay menu reacts accordingly to it.
   * @param boolean - The variable for the overlay menu true or false.
   */
  openOverlay(boolean: boolean) {
    this.openOverlayMenu = boolean;
  }


  /**
   * This method sets the variable openOverlayMenu to true or false.
   * The overlay menu reacts accordingly to it.
   * @param boolean - The variable for the overlay menu true or false.
   */
  closeOverlay(boolean: boolean) {
    this.openOverlayMenu = boolean;
  }

}
