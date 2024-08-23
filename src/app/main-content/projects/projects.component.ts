import { Component, inject } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { Project } from '../../interfaces/project.interface';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SingleProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  languageData = inject(LanguageService);
  projects: Array<Project> = [
    {
      name: 'Join',
      folderPath: '../../join/index.html',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS'],
      description: {
        en: 'Task manager inspried by the Kanban System. Create and organize tasks using drag and drop functions and assign users and categories.',
        ge: 'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen und weisen Sie Benutzer und Kategorien zu.',
      },
      imgSrc: 'assets/img/projects/join.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/join.git',
      linkLiveTest: ''
    },
    {
      name: 'El Pollo Loco',
      folderPath: '../../EPL/index.html',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS' ],
      description: {
        en: 'Jump, run and throw game based on object-oriented approach. Help Pepe to get the magical Salsa Bottle back by fighting against chicken, chicks and the "Pollo Loco".',
        ge: 'Sprung-, Lauf- und Wurfspiel, das auf einem objektorientierten Ansatz basiert. Hilf Pepe, die magische Salsaflasche zurückzubekommen, indem du gegen Hühner, Küken und das "Pollo Loco" kämpfst.',
      },
      imgSrc: 'assets/img/projects/el-pollo-loco.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/El_Pollo_Loco.git',
      linkLiveTest: ''
    },
    {
      name: 'Pokédex',
      folderPath: '../../Pokedex/index.html',
      usedTechnologies: ['JavaScript', 'HTML', 'CSS', 'Api' ],
      description: {
        en: 'Based on the PokéAPI library that provieds and catalogues pokémon information.',
        ge: 'Basiert auf der PokéAPI-Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',
      },
      imgSrc: 'assets/img/projects/pokédex.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/Pokedex.git',
      linkLiveTest: ''
    },
    {
      name: 'Portfolio',
      folderPath: 'index.html',
      usedTechnologies: ['Angular', 'TypeScript', 'HTML', 'SCSS' ],
      description: {
        en: 'My portfolio page, to introduce myself and highlight my web programming skills. It\'s the page you\'re looking at right now.',
        ge: 'Mein Portfolio, um mich vorzustellen und meine Fähigkeiten in der Webprogrammierung hervorzuheben. Das ist die Seite, die Sie sich gerad ansehen.',
      },
      imgSrc: 'assets/img/projects/portfolio.png',
      linkGitHub: 'https://github.com/PascaleSennhauser/portfolio.git',
      linkLiveTest: ''
    }
  ];
  text: any = {
    en: {
      title: "My work",
      description: "Explore a selection of my work here. Click on the image of a project to test it live."
    },
    ge: {
      title: "Projekte",
      description: "Entdecken Sie hier eine Auswahl meiner Arbeiten. Klicken Sie auf das Bild eines Projektes, um es live zu testen."
    }
  }
}
