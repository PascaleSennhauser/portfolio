import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  imgSrc1: string = 'assets/img/icons/location-icon-1.png';
  imgSrc2: string = 'assets/img/icons/location-icon-2.png';
}
