import { Component, inject } from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LanguageService } from '../services/language.service';
import { LandingPageMobileComponent } from "./landing-page-mobile/landing-page-mobile.component";
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.handleFragmentScroll();
      }
    });

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
   * Lifecycle hook that is called after Angular has fully initialized the component's view.
   * This method subscribes to changes in the URL fragment and triggers the 'handleFragmentScroll' method,  when the fragment changes.
   */
  ngAfterViewInit(): void {
    this.route.fragment.subscribe(() => {
      this.handleFragmentScroll();
    });
  }


  /**
   * This method handles scrolling to the element specified by the URL fragment.
   * If a fragment is present in the current route, this method waits briefly before scrolling smoothly to the corresponding element in the DOM.
   * Once the scrolling is complete, the fragment is removed from the URL.
   */
  handleFragmentScroll(): void {
    const fragment = this.route.snapshot.fragment;
    if (fragment) {
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          this.removeFragmentFromURL();
        }
      }, 0);
    }
  }


  /**
   * This method removes the fragment from the current URL, while preserving any existing query parameters.
   * This method is typically called after navigating to a fragment to clean up the URL.
   */
  removeFragmentFromURL(): void {
    this.router.navigate([], {
      fragment: undefined,
      queryParamsHandling: 'preserve',
    });
  }
}
