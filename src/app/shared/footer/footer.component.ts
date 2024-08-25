import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Router } from '@angular/router';
import { WINDOW } from '../../services/window-token';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  languageData = inject(LanguageService);
  private _window = inject(WINDOW);

  text: any = {
    en: {
      imprint: "Imprint"
    },
    ge: {
      imprint: "Impressum"
    }
  }

  constructor(private router: Router) {
  }

  goToImprint() {
    this.router.navigateByUrl(this.languageData.currentLanguage + '/imprint');
  }

  goToLandingPage() {
    console.log(this.router.url);
    if (this.router.url.includes('mainComponent')) {
      this._window.scrollTo(0, 0);
    } else {
      this.router.navigateByUrl(this.languageData.currentLanguage + '/mainComponent');
    }
  }
}
