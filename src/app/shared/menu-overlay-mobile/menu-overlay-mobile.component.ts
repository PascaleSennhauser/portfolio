import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { HeaderMobileComponent } from "../header-mobile/header-mobile.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-overlay-mobile',
  standalone: true,
  imports: [HeaderMobileComponent, CommonModule, RouterLink, TranslateModule],
  templateUrl: './menu-overlay-mobile.component.html',
  styleUrl: './menu-overlay-mobile.component.scss'
})

export class MenuOverlayMobileComponent {
  translate: TranslateService = inject(TranslateService);
  @Input() showOverlay: boolean = false;
  @Output() dontShowOverlay = new EventEmitter<false>;
  currentLanguage = 'en';


  toggleLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
  }

  
  /**
   * This method emits the event for closing the overlay menu by clicking on the burger menu.
   */
  closeOverlayMenu() {
    this.dontShowOverlay.emit(false);
  }
}
