import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { HeaderMobileComponent } from "../header-mobile/header-mobile.component";
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-overlay-mobile',
  standalone: true,
  imports: [HeaderMobileComponent, CommonModule, RouterLink],
  templateUrl: './menu-overlay-mobile.component.html',
  styleUrl: './menu-overlay-mobile.component.scss'
})

export class MenuOverlayMobileComponent {
  languageData = inject(LanguageService);
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
   * This method emits the event for closing the overlay menu by clicking on the burger menu.
   */
  closeOverlayMenu() {
    this.dontShowOverlay.emit(false);
  }


  /**
   * This method sets the language in the language service.
   * @param language - The selected language 'de' or 'en'.
   */
  setLanguage(language: string) {
    this.languageData.setLanguage(language);
  }


}
