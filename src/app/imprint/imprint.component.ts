import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { PrivacyPolicyEnglishComponent } from "../privacy-policy-english/privacy-policy-english.component";
import { PrivacyPolicyGermanComponent } from "../privacy-policy-german/privacy-policy-german.component";
import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent, PrivacyPolicyEnglishComponent, PrivacyPolicyGermanComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})

export class ImprintComponent {
  translate: TranslateService = inject(TranslateService);
  currentLanguage = 'en';
  private langChangeSubscription!: Subscription;


  ngOnInit() {
    this.setCurrentLanguage();
    console.log('onInit', this.currentLanguage);

    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log('Language changed', event.lang);
      this.currentLanguage = event.lang;
    });
  }


  setCurrentLanguage() {
    if (this.translate.currentLang) {
      this.currentLanguage = this.translate.currentLang;
    } else {
      this.currentLanguage = this.translate.defaultLang;
    }
  }


  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

}
