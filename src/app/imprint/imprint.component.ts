import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { PrivacyPolicyEnglishComponent } from "../privacy-policy-english/privacy-policy-english.component";
import { PrivacyPolicyGermanComponent } from "../privacy-policy-german/privacy-policy-german.component";
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent,
    PrivacyPolicyEnglishComponent,
    PrivacyPolicyGermanComponent,
    TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})

export class ImprintComponent {
  translate: TranslateService = inject(TranslateService);
  currentLanguage = '';
  private langChangeSubscription!: Subscription;


  /**
   * This method sets the current language and subscribes the TranslateService to get the language changes.
   */
  ngOnInit() {
    this.setCurrentLanguage();
    this.langChangeSubscription = this.subscribeLanguageChanges();
  }


  /**
   * This method subscribes the TranslateService to get the language changes.
   * @returns 
   */
  subscribeLanguageChanges() {
    return this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLanguage = event.lang;
    });
  }


  /**
   * This method sets the current language, so the according privacy policy is shown.
   */
  setCurrentLanguage() {
    if (this.translate.currentLang) {
      this.currentLanguage = this.translate.currentLang;
    } else {
      this.currentLanguage = this.translate.defaultLang;
    }
  }


  /**
   * This method unsubscribes the language changes of the Translate Service.
   * This ensures that any existing subscriptions are properly unsubscribed to prevent memory leaks.
   */
  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

}
