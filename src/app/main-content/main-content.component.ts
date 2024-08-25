import { Component, inject } from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { LandingPageMobileComponent } from "./landing-page-mobile/landing-page-mobile.component";
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { WINDOW } from '../services/window-token';
import { MobileOverlayComponent } from "../shared/mobile-overlay/mobile-overlay.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingPageComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjectsComponent,
    ContactComponent,
    LandingPageMobileComponent,
    MobileOverlayComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})

export class MainContentComponent {
  languageData = inject(LanguageService);
  private _window = inject(WINDOW);


  /**
   * Constructor for the component, which initializes the Activated route, as well as the Router.
   * @param route - The currently activated route, used to access route parameters and data.
   * @param router - The Angular Router, used for navigating between different routes.
   */
  constructor(private route: ActivatedRoute, private router: Router) {
  }


  /**
   * Angular lifecycle hook that is called after the component has been initialized.
   * First the current language gets saved.
   * Second the window gets scrolled to the top.
   */
  ngOnInit(): void {
    this.getCurrentLanguage();
    this.scrollWindowToTop();
  }


  /**
   * This method sets the current language through the added language parameter in the router path.
   */
  getCurrentLanguage() {
    this.route.params.subscribe((params) => {
      const lang = params['lang'];
      if (lang) {
        this.languageData.currentLanguage = params['lang'];
      }
    });
  }


  /**
   * This method scrolls the window to the top by filtering the event-stream.
   * When the navigation is finished, the window gets scrolled to the top.
   */
  scrollWindowToTop() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this._window.scrollTo(0, 0);
    });
  }
}
