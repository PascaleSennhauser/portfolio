import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderMobileComponent } from "../header-mobile/header-mobile.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-overlay-mobile',
  standalone: true,
  imports: [HeaderMobileComponent, CommonModule],
  templateUrl: './menu-overlay-mobile.component.html',
  styleUrl: './menu-overlay-mobile.component.scss'
})
export class MenuOverlayMobileComponent {
  @Input()showOverlay:boolean = false;
  @Output()dontShowOverlay = new EventEmitter<false>;

  closeOverlayMenu() {
    this.dontShowOverlay.emit(false);
  }


}
