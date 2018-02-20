import { RouterLink } from '@angular/router/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Angular CI Example! </h1>
    <nav>
      <a routerLink="/red">RED123</a>
      <a routerLink="/blue">BLUE123</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
