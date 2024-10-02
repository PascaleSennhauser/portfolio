import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  translate: TranslateService = inject(TranslateService);
  @Input() pageImprint = false;
  currentLanguage ='en';



  /**
   * This constructor creates an instance of the component.
   * @param router - The Angular Router used for navigation.
   */
  constructor(private router: Router) {
  }


  toggleLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
  }


  /**
   * This method navigates to the landing page with the current language.
   * Constructs the URL by appending '/mainComponent' to the current language.
   */
  goToLandingPage() {
    this.router.navigateByUrl('');
  }
}
