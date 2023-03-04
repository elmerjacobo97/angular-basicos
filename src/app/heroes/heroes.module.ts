import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent], // declarar
  exports: [ListadoComponent], // visibilidad
  imports: [CommonModule], // Sobre todo es para usar las directivas.
})
export class HeroesModule {}
