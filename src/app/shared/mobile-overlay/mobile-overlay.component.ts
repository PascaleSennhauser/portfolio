import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-overlay',
  standalone: true,
  imports: [],
  templateUrl: './mobile-overlay.component.html',
  styleUrl: './mobile-overlay.component.scss'
})

export class MobileOverlayComponent {
  text: any = {
    en: {
      text: "Please rotate your device"
    },
    ge: {
      text: "Bitte drehe dein Gerät"
    }
  }
}
