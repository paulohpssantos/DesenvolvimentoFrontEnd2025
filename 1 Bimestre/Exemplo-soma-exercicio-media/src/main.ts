import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SomaComponent } from './app/soma/soma';
import { Calcmedia } from './app/calcmedia/calcmedia';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SomaComponent, Calcmedia],
  template: `
    <app-soma></app-soma>
    <app-calcmedia></app-calcmedia>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
