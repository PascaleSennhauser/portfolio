import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  imgSrcLocation: string = 'assets/img/icons/location-icon-1.png';
  imgSrcRemote: string = 'assets/img/icons/remote-icon-1.png';
}
