import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languageSubject = new BehaviorSubject<string>('en');
  currentLanguage: any = 'en';

  constructor() {
    this.languageSubject.subscribe((language) => {
      this.currentLanguage = language;
    })
  }

  setLanguage(language: string) {
    this.languageSubject.next(language);
  }
}
