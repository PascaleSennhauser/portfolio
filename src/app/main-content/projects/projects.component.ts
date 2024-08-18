import { Component } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Array<Project> = [
    {
      name: 'Join',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS', 'Firebase' ],
      description: 'Task manager inspried by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imgSrc: 'assets/img/projects/join.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/join.git',
      linkLiveTest: ''
    },
    {
      name: 'El Pollo Loco',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS' ],
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to get the magical Salsa Bottle back by fighting against chicken, chicks and the "Pollo Loco".',
      imgSrc: 'assets/img/projects/el-pollo-loco.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/El_Pollo_Loco.git',
      linkLiveTest: ''
    },
    {
      name: 'Pokédex',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS', 'Api' ],
      description: 'Based on the PokéAPI library that provieds and catalogues pokemon information.',
      imgSrc: 'assets/img/projects/pokédex.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/Pokedex.git',
      linkLiveTest: ''
    },
    {
      name: 'Portfolio',
      usedTechnologies: ['Angular', 'TypeScript', 'HTML', 'SCSS' ],
      description: 'My portfolio page, to introduce myself and highlight my web programming skills. It\'s the page you\'re looking at right now.',
      imgSrc: 'assets/img/projects/portfolio.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/portfolio.git',
      linkLiveTest: ''
    }
  ];
}
