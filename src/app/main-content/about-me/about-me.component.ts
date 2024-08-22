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
      aboutMe: "I am a frontend developer based in Winterthur, near Zurich. My passion for programming stems from my love for logical thinking and the drive to creat appealing projects. To stay up-to-date and continously improve my skills, I dedicate time to self-eductaion. My diverse professional background, including experience as a business administrator, as well as working in the health and social sector, has provided me with valuable competences. I have developed skills such as quickly learning new concepts, addressing customer needs and remaining flexible - qulities that benefit me as a developer. Additionally, I enjoy solving complex problems and working with clients and in a team.",
      workTogether: "If you think I'd be a good fit for your company or projects, contact me!",
      button: "Send a message"
    },
    ge: {
      title: "Lassen Sie uns gemeinsam<br>arbeiten",
      Iam: "Ich bin",
      located: "wohnhaft in<br>Winterthur",
      remote: "offen für<br>Remote-Arbeit",
      aboutMe: "Ich bin eine Frontend-Entwicklerin aus Winterthur, nahe Zürich. Meine Leidenschaft für die Programmierung ergibt sich aus der Freude am logischen Denken, sowie ein ansprechendes Projekt zu verwirklichen. Um auf dem Laufenden zu bleiben und meine Fähigkeiten kontinuierlich weiterzuentwickeln, investiere ich Zeit, um mich selbst fortzubilden. Durch meine vielseitigen Berufserfahrungen, darunter Erfahurng im Kaufmännsichen Bereich, sowie im Gesundheits- und Sozialwesen, habe ich mir wertvolle Kompetenzen angeignet. Darunter gehören Fähigkeiten, wie schnell viel Neues zu lernen, auf Kundenbefürfnisse einzugehen und flexibel zu sein, was mir als Entwicklerin zugute kommt. Ausserdem macht es mir Spass, komplexe Probleme zu lösen und mit Kunden, sowie im Team zusammenzuarbeiten.",
      workTogether: "Wenn Sie denken, dass ich gut zu Ihrem Unternehmen oder zu Ihren Projekten passe, kontaktieren sie mich!",
      button: "Nachricht senden"
    }
  }


}
