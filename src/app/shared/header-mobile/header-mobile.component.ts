import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})

export class HeaderMobileComponent {
  @Input() showLogo: boolean = true;
  @Output() activatedBurgerMenu = new EventEmitter<boolean>();


  /**
   * This method emits the event for displaying the overlay menu by clicking on the burger menu.
   */
  showOverlayMenu() {
    this.activatedBurgerMenu.emit(true);
  }
}
