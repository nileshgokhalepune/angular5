import { Component, isDevMode } from '@angular/core';
import { } from '../environments/environment.prod'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  env: any;
  constructor() {
    this.env = isDevMode() ? "Dev" : "Prod";
  }

  title = 'Fun with Angular!!!';
}
