import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-mobile-overlay',
  standalone: true,
  imports: [],
  templateUrl: './mobile-overlay.component.html',
  styleUrl: './mobile-overlay.component.scss'
})
export class MobileOverlayComponent {
  languageData = inject(LanguageService);
  text: any = {
    en: {
      text: "Please rotate your device"
    },
    ge: {
      text: "Bitte drehe dein Gerät"
    }
  }
}
