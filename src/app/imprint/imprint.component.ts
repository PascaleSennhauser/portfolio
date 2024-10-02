import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { PrivacyPolicyEnglishComponent } from "../privacy-policy-english/privacy-policy-english.component";
import { PrivacyPolicyGermanComponent } from "../privacy-policy-german/privacy-policy-german.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, PrivacyPolicyEnglishComponent, PrivacyPolicyGermanComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})

export class ImprintComponent {
  translate: TranslateService = inject(TranslateService);

  /**
   * Placeholder
   */

  currentLanguage = 'en';
}
