import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from '../../../services/window-token';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {
  translate: TranslateService = inject(TranslateService);
  private _window = inject(WINDOW);
  http = inject(HttpClient);
  contactData = {
    name: "",
    email: "",
    message: "",
  };
  mailTest: boolean = false;
  privacyPolicyChecked: boolean = false;
  post = {
    endPoint: 'sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  showValidation: boolean = false;


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
    this.router.navigateByUrl('/imprint');
    this._window.scrollTo(0, 0);
  }


  /**
   * This method marks all the input fields as touched, when the disabled submit button is selected.
   * The reuqired texts are shwon.
   * @param ngForm - The Angular form to mark all controls as touched.
   */
  markAllFormFieldsAsTouched(ngForm: NgForm) {
    ngForm.control.markAllAsTouched();
  }



  /**
   * This method submits the form.
   * When it's not a mail test and the form is valid, the form date is send to the specified endpoint for processing via PHP.
   * If it's a mailTest, the form data is being logged to the console instead of being sent.
   * @param ngForm - The Angular form instance, that gets submitted.
   */
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
          complete: () => this.showThankYouText(),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.showThankYouText();
    }
  }


  /**
   * This method shows a thank you text, wehn a message is sent.
   */
  showThankYouText() {
    this.showValidation = true;
    setTimeout(() => {
      this.showValidation = false;
    }, 1500);
  }
}
