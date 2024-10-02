import { Component, HostListener, ElementRef, inject } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RouterLink } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { WINDOW } from '../../services/window-token';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, RouterLink, TranslateModule],
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
  translate: TranslateService = inject(TranslateService);
  private _window = inject(WINDOW);
  isInSight: 'enter' | 'leave' = 'enter';
  isLandingPageMobile = this._window.innerWidth <= 1025;

  

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


  @HostListener('window:resize', ['$event'])
  /**
   * This method is called, when the window gets resized.
   * When the window is bigger than 1000px, it's a big screen and the project description gets adapted.
   */
  onResize(event: Event) {
    this.isLandingPageMobile = this._window.innerWidth <= 1025;
  }
}
