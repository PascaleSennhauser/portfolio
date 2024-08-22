import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languageSubject = new BehaviorSubject<string>('en');

  setLanguage(language: string) {
    this.languageSubject.next(language);
  }
}
