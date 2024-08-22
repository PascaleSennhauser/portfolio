import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  languageData = inject(LanguageService);

  text: any = {
    en: {
      imprint: "Imprint"
    },
    ge: {
      imprint: "Impressum"
    }
  }
}
