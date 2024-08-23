import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {
  @Input()showLogo:boolean = true;
  @Output()burgerMenu = new EventEmitter<boolean>();

  showOverlayMenu() {
    this.burgerMenu.emit(true);
  }
}
