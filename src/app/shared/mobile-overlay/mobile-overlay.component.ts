import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-overlay',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './mobile-overlay.component.html',
  styleUrl: './mobile-overlay.component.scss'
})

export class MobileOverlayComponent {
  translate: TranslateService = inject(TranslateService);
}
