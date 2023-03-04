import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroDeleted: string = '';

  heroes: string[] = [
    'Spider-man',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitán América',
  ];

  // Methods
  eliminarHero(): void {
    this.heroDeleted = this.heroes.shift() || ''; // shift retorna el héroe eliminado.
  }
}
