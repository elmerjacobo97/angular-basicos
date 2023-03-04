import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  // Propiedades
  nombre: string = 'Ironman';
  edad: number = 45;

  // Getters
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  // Methods
  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spider-man';
  }

  cambiarEdad(): void {
    this.edad = 50;
  }
}
