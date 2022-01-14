import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  template: `<h2>Hola {{name}}</h2>
  <input [(ngModel)]="name">`,
})
export class TwoWayDatabindingComponent {
  private name = 'Angular 5';
}
