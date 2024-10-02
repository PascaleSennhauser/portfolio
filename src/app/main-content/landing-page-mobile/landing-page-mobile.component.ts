import { Component, inject } from '@angular/core';
import { HeaderMobileComponent } from '../../shared/header-mobile/header-mobile.component';
import { MenuOverlayMobileComponent } from "../../shared/menu-overlay-mobile/menu-overlay-mobile.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-page-mobile',
  standalone: true,
  imports: [HeaderMobileComponent, MenuOverlayMobileComponent, TranslateModule],
  templateUrl: './landing-page-mobile.component.html',
  styleUrl: './landing-page-mobile.component.scss'
})

export class LandingPageMobileComponent {
  translate: TranslateService = inject(TranslateService);
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
