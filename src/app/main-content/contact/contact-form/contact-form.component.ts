import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {
  languageData = inject(LanguageService);
  noValidName: boolean = false;
  name = "";
  isFirstNameInput: boolean = true;
  noValidMail: boolean = false;
  email = "";
  isFirstMailInput: boolean = true;
  noValidMessage: boolean = false;
  message = "";
  isFirstMessageInput: boolean = true;

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


  checkNameInput() {
    if (this.name.length < 2) {
      this.noValidName = true;
    } else {
      this.noValidName = false;
    }
  }

  firstNameInput() {
    this.isFirstNameInput = false;
  }

  checkMailInput() {
    if (this.email.length < 2) {
      this.noValidMail = true;
    } else {
      this.noValidMail = false;
    }
  }

  firstMailInput() {
    this.isFirstMailInput = false;
  }

  checkMessageInput() {
    if (this.message.length < 2) {
      this.noValidMessage = true;
    } else {
      this.noValidMessage = false;
    }
  }

  firstMessageInput() {
    this.isFirstMessageInput = false;
  }

}
