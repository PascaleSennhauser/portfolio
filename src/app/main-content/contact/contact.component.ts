import { Component, inject } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  languageData = inject(LanguageService);

  text: any = {
    en: {
      title: "Contact",
      question: "Got a problem to solve?",
      contactDescription: "Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.",
      developerDescription: "Need a Frontend developer?<b> Contact me!</b>"

    },
    ge: {
      title: "Kontakt",
      question: "Haben Sie ein Problem zu lösen?",
      contactDescription: "Kontaktieren Sie mich über dieses Formular. Ich freue mich von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.",
      developerDescription: "Brauchen Sie eine Frontend Entwicklerin?<b> Kontaktieren Sie mich!</b>"
    }
  }

}
