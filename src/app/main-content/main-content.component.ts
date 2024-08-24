import { Component, inject} from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { LandingPageMobileComponent } from "./landing-page-mobile/landing-page-mobile.component";
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { WINDOW } from '../services/window-token';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, SkillSetComponent, ProjectsComponent, ContactComponent, LandingPageMobileComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  languageData = inject(LanguageService);
  private _window = inject(WINDOW);

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
      this.route.params.subscribe((params) => {
        const lang = params['lang'];
        if (lang) {
          this.languageData.currentLanguage = params['lang'];
        }
        });
        this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
          this._window.scrollTo(0, 0);
        });
    }
}
