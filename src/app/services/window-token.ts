import { InjectionToken } from '@angular/core';


/**
 * Injection token that provides access to the global 'window' object.
 * 
 * This token abstracts the 'window'  object for use in Angular components and services.
 * It includes a factory function to ensure compatibility with environments where 'window'
 * is not available, such as server-side rendering (SSR) or tests.
 */
export const WINDOW = new InjectionToken<Window>('WindowToken', {
  factory: () => {
    if(typeof window !== 'undefined') {
      return window
    }
    return new Window();
  }
});