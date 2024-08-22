import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { LanguageService } from '../services/language.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ HeaderComponent ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  languageData = inject(LanguageService);

  text: any = {
    en: {
      imprintTitle: "Imprint",
      imprintCountry: "Switzerland",
      images: "Images",
      privacyPolicyTitle: "Privacy Policy"
    },
    ge: {
      imprintTitle: "Impressum",
      imprintCountry: "Schweiz",
      images: "Bilder",
      privacyPolicyTitle: "Datenschutzerklärung"
    }
  }

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.languageData.currentLanguage = params['lang'];
      });
  }

}
