import { Component, Input } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() project: Project = {
    name: 'Join',
    usedTechnologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase' ],
    description: 'Task manager inspried by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    imgSrc: 'assets/img/projects/join.png',
    linkGitHub: 'https://github.com/PascaleSennhauser/join.git',
    linkLiveTest: ''
  };

  @Input() index: number = 0;

}
