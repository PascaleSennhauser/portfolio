import { Component, inject} from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  languageData = inject(LanguageService);

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.route.params.subscribe((params) => {
        const lang = params['lang'];
        if (lang) {
          this.languageData.currentLanguage = params['lang'];
        }
        });
    }
}
