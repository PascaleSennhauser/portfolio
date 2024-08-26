import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {
  languageData = inject(LanguageService);
  http = inject(HttpClient);
  contactData = {
    name: "",
    email: "",
    message: "",
  };
  mailTest = true;
  privacyPolicyChecked = false;


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


  markAllFormFieldsAsTouched(ngForm: NgForm) {
    ngForm.control.markAllAsTouched();

  }

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.contactData, this.privacyPolicyChecked);
      ngForm.resetForm();
    }
  }
}
