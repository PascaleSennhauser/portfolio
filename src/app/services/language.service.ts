import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  languageSubject = new BehaviorSubject<string>('en');
  currentLanguage: any = 'en';


  /**
   * This constructor subscribes the language behaviour subject and listens if something changes.
   * If something changes all the components, who have injected the language service change the language.
   */
  constructor() {
    this.languageSubject.subscribe((language) => {
      this.currentLanguage = language;
    })
  }


  /**
   * This method gets called, when the language gets changed and changes the current language.
   * @param language - The chosen language
   */
  setLanguage(language: string) {
    this.languageSubject.next(language);
  }
}
