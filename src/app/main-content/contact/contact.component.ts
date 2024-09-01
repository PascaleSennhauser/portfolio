import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { LanguageService } from '../../services/language.service';
import { RouterLink } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('titleEnter', [
      state('enter', style({ transform: 'scale(1)' })),
      state('leave', style({ transform: 'scale(0)' })),
      transition('leave => enter', [animate('500ms ease-in')])
    ])
  ]
})

export class ContactComponent {
  languageData = inject(LanguageService);
  text: any = {
    en: {
      title: "Contact",
      question: "Got a problem to solve?",
      contactDescription: "Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.",
      developerDescription: "Need frontend developer?<b> Contact me!</b>"

    },
    ge: {
      title: "Kontakt",
      question: "Haben Sie ein Problem zu lösen?",
      contactDescription: "Kontaktieren Sie mich über dieses Formular. Ich freue mich von Ihnen zu hören, Ihre Ideen kennenzulernen und mit meiner Arbeit zu Ihren Projekten beizutragen.",
      developerDescription: "Brauchen Sie eine Frontend Entwicklerin?<b> Kontaktieren Sie mich!</b>"
    }
  }
  isInSight: 'enter' | 'leave' = 'enter';

  

  /**
   * This constructor creates an instance of the component.
   * @param el - The reference to the native DOM elment of the component.
   */
  constructor(private el: ElementRef) {
  }


  @HostListener('window:scroll', [])


  /**
   * This method handles the scroll event and checks if the element with the class 'title' is within the viewport.
   * It updates the 'isInSight' property accordingly.
   * Through that the animation is shown, when the element is in the viewport. 
   */
  onWindowScroll() {
    const titleElement = this.el.nativeElement.querySelector('.title');
    if (titleElement) {
      const rect = titleElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        this.isInSight = 'enter';
      } else {
        this.isInSight = 'leave';
      }
    }
  }


  /**
   * This method scrolls the window to the top, so you get to the landing page.
   */
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
