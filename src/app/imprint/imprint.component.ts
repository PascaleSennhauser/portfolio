import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { LanguageService } from '../services/language.service';
import { ActivatedRoute } from '@angular/router';
import { WINDOW } from '../services/window-token';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [ HeaderComponent ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  languageData = inject(LanguageService);
  private _window = inject(WINDOW);

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

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.languageData.currentLanguage = params['lang'];
      });
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this._window.scrollTo(0, 0);
      });
  }

}
