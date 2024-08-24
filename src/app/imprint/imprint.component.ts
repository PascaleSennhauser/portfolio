import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { LanguageService } from '../services/language.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { WINDOW } from '../services/window-token';
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


  /**
   * Constructor for the component, which initializes the Activated route, as well as the Router.
   * @param route - The currently activated route, used to access route parameters and data.
   * @param router - The Angular Router, used for navigating between different routes.
   */
  constructor(private route: ActivatedRoute, private router: Router) {
  }


  /**
   * Angular lifecycle hook that is called after the component has been initialized.
   * First the current language gets saved.
   * Second the window gets scrolled to the top.
   */
  ngOnInit(): void {
      this.getCurrentLanguage();
      this.scrollWindowToTop();
  }


  /**
   * This method sets the current language through the added language parameter in the router path.
   */
  getCurrentLanguage() {
    this.route.params.subscribe((params) => {
      this.languageData.currentLanguage = params['lang'];
      });
  }


  /**
   * This method scrolls the window to the top by filtering the event-stream.
   * When the navigation is finished, the window gets scrolled to the top.
   */
  scrollWindowToTop() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this._window.scrollTo(0, 0);
    });
  }

}
