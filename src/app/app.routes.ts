import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ExtraOptions } from '@angular/router';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: ':lang/mainComponent', component: MainContentComponent },
    { path: ':lang/imprint', component: ImprintComponent }
];

/**
 * Configuration options for Angular's Router to control scroll behavior and navigation.
 */
const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled', // Enables scoll position restoration. Restores the scroll position when navigating back to a previously visited route.
    anchorScrolling: 'enabled',           // Enables anchor scrolling. Angular will scroll to the element with the ID matching the URL fragment.
    onSameUrlNavigation: 'ignore',        // Ignores navigation events to the same URL. This prevents unnecessary reloads, when the URL has not changed.
    scrollOffset: [0, 0]                 // Adjusts the scroll position by a specified offset, useful for fixed headers.
};
