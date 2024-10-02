import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { WINDOW } from '../../services/window-token';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translate: TranslateService = inject(TranslateService);
  private _window = inject(WINDOW);


  /**
   * This constructor creates an instance of the component.
   * @param router - The Angular Router used for navigation.
   */
  constructor(private router: Router) {
  }


  /**
   * This method navigates to the imprint with the current language.
   * Constructs the URL by appending '/imprint' to the current language.
   */
  goToImprint() {
    this.router.navigateByUrl('/imprint');
    this._window.scrollTo(0, 0);
  }


  /**
   * This method navigates to the landing page and scrolls to the top if not already there.
   * Constructs the URL by appending '/mainComponent' to the current langauge.
   */
  goToLandingPage() {
    this.router.navigateByUrl('/');
    this._window.scrollTo(0, 0);
  }
}
