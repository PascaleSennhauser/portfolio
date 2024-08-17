import { Component, Input } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [],
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
}
