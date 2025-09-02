import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Listanomes } from './app/listanomes/listanomes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Listanomes],
  template: `
    <app-listanomes></app-listanomes>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
