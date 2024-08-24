import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { HeaderMobileComponent } from "../header-mobile/header-mobile.component";
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-menu-overlay-mobile',
  standalone: true,
  imports: [HeaderMobileComponent, CommonModule],
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

  closeOverlayMenu() {
    this.dontShowOverlay.emit(false);
  }

  setLanguage(language: string) {
    this.languageData.setLanguage(language);
  }


}
