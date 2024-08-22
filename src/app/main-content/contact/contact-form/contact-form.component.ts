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

  constructor(private router: Router) {
  }

  goToImprint() {
    this.router.navigateByUrl(this.languageData.currentLanguage + '/imprint');
  }
}
