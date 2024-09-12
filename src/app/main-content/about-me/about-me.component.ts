import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  animations: [
    trigger('titleEnter', [
      state('enter', style({ transform: 'scale(1)' })),
      state('leave', style({ transform: 'scale(0)' })),
      transition('leave => enter', [animate('500ms ease-in')])
    ])
  ]
})

export class AboutMeComponent {
  imgSrcLocation: string = 'assets/img/icons/location-icon-1.png';
  imgSrcRemote: string = 'assets/img/icons/remote-icon-1.png';
  languageData = inject(LanguageService);
  text: any = {
    en: {
      title: "Let's work<br>together",
      Iam: "I am",
      located: "located in<br>Winterthur",
      remote: "open to work<br>remote",
      aboutMe: "My passion for programming stems from my love for logical thinking and the drive to create appealing projects. Together with my keen understanding of customer needs, this enables me to create suitable and creative solutions. I invest time in further training to stay up to date and continuously develop my skills. Additionally, I enjoy solving complex problems and working with clients and in a team.",
      workTogether: "If you think I'd be a good fit for your company or projects, contact me!",
      button: "Send a message"
    },
    ge: {
      title: "Lassen Sie uns gemeinsam<br>arbeiten",
      Iam: "Ich bin",
      located: "wohnhaft in<br>Winterthur",
      remote: "offen für<br>Remote-Arbeit",
      aboutMe: "Meine Leidenschaft für die Programmierung ergibt sich aus der Freude am logischen Denken sowie ein ansprechendes Projekt zu verwirklichen. Zusammen mit meinem ausgeprägten Verständnis für Kundenbedürfnisse ermöglicht dies mir, passende und kreative Lösungen zu erstellen. Um auf dem Laufenden zu bleiben und meine Fähigkeiten kontinuierlich weiterzuentwickeln, investiere ich Zeit, um mich fortzubilden. Ausserdem macht es mir Spass, komplexe Probleme zu lösen und mit Kunden sowie im Team zusammenzuarbeiten.",
      workTogether: "Wenn Sie denken, dass ich gut zu Ihrem Unternehmen oder zu Ihren Projekten passe, kontaktieren Sie mich!",
      button: "Nachricht senden"
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
}
