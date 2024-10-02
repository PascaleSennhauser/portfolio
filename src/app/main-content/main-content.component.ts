import { Component, inject } from '@angular/core';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageMobileComponent } from "./landing-page-mobile/landing-page-mobile.component";
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

}
