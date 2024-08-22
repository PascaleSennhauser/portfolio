import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
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
      aboutMe: "I am a frontend developer based in Winterthur, Switzerland near Zurich. I have a passion for coding websites and web based projects. To stay current and continously develop my skills, I dedicate time to self-eductaion. My diverse professional background, including experience as a business administrator, as well as working in the health and social sector, has equipped me with valuable insights and competences. I have developed skills such as quickly learning new things, understanding client needs and remaining flexible - qulities that greatly benefit me as a developer. I also enjoy solving complex problems and working with clients to find the best solutions for their needs.",
      workTogether: "If you think I'd be a good fit for your company or projects, contact me!",
      button: "Send a message"
    },
    ge: {
      title: "Lassen Sie uns gemeinsam<br>arbeiten",
      Iam: "Ich bin",
      located: "wohnhaft in<br>Winterthur",
      remote: "offen für<br>Remote-Arbeit",
      aboutMe: "Ich bin eine Frontend-Entwicklerin und wohnhaft in Winterthur, Schweiz, in der Nähe von Zürich. Ich habe eine Leidenschaft für die Programmierung von Webseiten und webbasierten Projekten. Um auf dem Laufenden zu bleiben und meine Fähigkeiten kontinuierlich weiterzuentwickeln, investiere ich Zeit, um mich selbst fortzubilden. Durch meine vielseitigen Berufserfahrungen, darunter Erfahurng im Kaufmännsichen Bereich, sowie im Gesundheits- und Sozialwesen, hat mir wertvolle Einblicke und Kompetenzen vermittelt. Ich habe Fähigkeiten entwickelt, wie schnell viel Neues zu lernen, auf Kundenbefürfnisse einzugehen und flexibel zu sein, was mir als Entwicklerin zugute kommt. Ausserdem macht es mir Spass, komplexe Probleme zu lösen und mit Kunden zusammenzuarbeiten, um die besten Lösungen für ihre Bedürfnisse zu finden.",
      workTogether: "Wenn Sie denken, dass ich gut zu Ihrem Unternehmen oder zu Ihren Projekten passe, kontaktieren sie mich!",
      button: "Nachricht senden"
    }
  }


}
