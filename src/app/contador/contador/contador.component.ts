import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      La base es:<strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(+base)">+{{ base }}</button>
    <button (click)="acumular(-base)">-{{ base }}</button>

    <span>{{ number }}</span>
  `,
})
export class ContadorComponent {
  public title: string = 'Contador App';
  public number: number = 100;
  public base: number = 5;

  // Methods
  public acumular(valor: number) {
    this.number += valor;
  }
}
