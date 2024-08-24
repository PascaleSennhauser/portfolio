import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {
  languageData = inject(LanguageService);

  /**
   * Constructor for the component, which initilizes the Router.
   * @param router - The Angular Router, used for navigating between different routes.
   */
  constructor(private router: Router) {
  }


  /**
   * This method navigates the user to the imprint page.
   * The URL is constructed using the current language and appends '/imprint' to it.
   */
  goToImprint() {
    this.router.navigateByUrl(this.languageData.currentLanguage + '/imprint');
  }
}
