import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HostListener } from '@angular/core';
import { ElementRef } from '@angular/core';

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
      aboutMe: "My passion for programming stems from my love for logical thinking and the drive to create appealing projects. To stay up-to-date and continuously improve my skills, I dedicate time to self-education. My diverse professional background, including experience as a business administrator, as well as working in the health and social sector, has provided me with valuable competencies. I have developed skills such as quickly learning new concepts, addressing customer needs and remaining flexible - qualities that benefit me as a developer. Additionally, I enjoy solving complex problems and working with clients and in a team.",
      workTogether: "If you think I'd be a good fit for your company or projects, contact me!",
      button: "Send a message"
    },
    ge: {
      title: "Lassen Sie uns gemeinsam<br>arbeiten",
      Iam: "Ich bin",
      located: "wohnhaft in<br>Winterthur",
      remote: "offen für<br>Remote-Arbeit",
      aboutMe: "Meine Leidenschaft für die Programmierung ergibt sich aus der Freude am logischen Denken, sowie ein ansprechendes Projekt zu verwirklichen. Um auf dem Laufenden zu bleiben und meine Fähigkeiten kontinuierlich weiterzuentwickeln, investiere ich Zeit, um mich selbst fortzubilden. Durch meine vielseitigen Berufserfahrungen, darunter Erfahrung im kaufmännischen Bereich, sowie im Gesundheits- und Sozialwesen, habe ich mir wertvolle Kompetenzen angeeignet. Darunter gehören Fähigkeiten, wie schnell viel Neues zu lernen, auf Kundenbedürfnisse einzugehen und flexibel zu sein, was mir als Entwicklerin zugutekommt. Ausserdem macht es mir Spass, komplexe Probleme zu lösen und mit Kunden, sowie im Team zusammenzuarbeiten.",
      workTogether: "Wenn Sie denken, dass ich gut zu Ihrem Unternehmen oder zu Ihren Projekten passe, kontaktieren Sie mich!",
      button: "Nachricht senden"
    }
  }
  isInSight: 'enter' | 'leave' = 'enter';

  
  constructor(private el: ElementRef) {
  }


  @HostListener('window:scroll', [])
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
