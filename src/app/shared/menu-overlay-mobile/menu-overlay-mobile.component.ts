import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderMobileComponent } from "../header-mobile/header-mobile.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-overlay-mobile',
  standalone: true,
  imports: [HeaderMobileComponent, CommonModule, RouterLink],
  templateUrl: './menu-overlay-mobile.component.html',
  styleUrl: './menu-overlay-mobile.component.scss'
})

export class MenuOverlayMobileComponent {
  @Input() showOverlay: boolean = false;
  @Output() dontShowOverlay = new EventEmitter<false>;
  text: any = {
    en: {
      aboutMe: "About me",
      skillSet: "Skill set",
      myWork: "My work",
      contact: "Contact",
      german: "GE",
      english: "EN"
    },
    ge: {
      aboutMe: "Über mich",
      skillSet: "Fähigkeiten",
      myWork: "Meine Projekte",
      contact: "Kontakt",
      german: "DE",
      english: "EN"
    }
  }

  /**
   * Placeholder
   */
  languageData = 'en';


  /**
   * This method emits the event for closing the overlay menu by clicking on the burger menu.
   */
  closeOverlayMenu() {
    this.dontShowOverlay.emit(false);
  }
}
