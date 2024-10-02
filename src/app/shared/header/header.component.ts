import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  @Input() pageImprint = false;
  text: any = {
    en: {
      aboutMe: "About me",
      skillSet: "Skill set",
      myWork: "My work",
      german: "GE",
      english: "EN"
    },
    ge: {
      aboutMe: "Über mich",
      skillSet: "Fähigkeiten",
      myWork: "Meine Projekte",
      german: "DE",
      english: "EN"
    }
  }

  /**
   * Placholder
   */
  languageData = 'en';



  /**
   * This constructor creates an instance of the component.
   * @param router - The Angular Router used for navigation.
   */
  constructor(private router: Router) {
  }


  /**
   * This method navigates to the landing page with the current language.
   * Constructs the URL by appending '/mainComponent' to the current language.
   */
  goToLandingPage() {
    this.router.navigateByUrl('');
  }
}
