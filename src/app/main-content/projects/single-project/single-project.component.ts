import { Component, Input, inject } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  languageData = inject(LanguageService);
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

  getDescription(): string {
    return this.project.description[this.languageData.currentLanguage as 'en' | 'ge'];
  }
}
