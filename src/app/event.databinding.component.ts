import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  template: `<button (click)="incrementar()">Incrementar</button>`,
})
export class EventDatabindingComponent {
  private contador: number = 0;

  incrementar() {
    this.contador += 1;
  }
}
