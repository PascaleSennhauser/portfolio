import { Component, Input, inject, HostListener } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';
import { WINDOW } from '../../../services/window-token';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})

export class SingleProjectComponent {
  languageData = inject(LanguageService);
  private _window = inject(WINDOW);
  @Input() project: Project = {
    name: 'Join',
    folderPath: '../../join/index.html',
    usedTechnologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase' ],
    description: {
      en: 'Task manager inspried by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      ge: 'De',
    },
    imgSrc: 'assets/img/projects/join.png',
    linkGitHub: 'https://github.com/PascaleSennhauser/join.git',
    linkLiveTest: ''
  };
  @Input() index: number = 0;
  isBigScreen = this._window.innerWidth > 1000;
  @HostListener('window:resize', ['$event'])


  /**
   * This method is called, when the window gets resized.
   * When the window is bigger than 1000px, it's a big screen and the project description gets adapted.
   */
  onResize(event: Event) {
      this.isBigScreen = this._window.innerWidth > 1000;
  }


  /**
   * This method retrieves the project description based on the current language.
   * @returns {string} The description of the project in the currently selected language.
   */
  getDescription(): string {
    return this.project.description[this.languageData.currentLanguage as 'en' | 'ge'];
  }
}
