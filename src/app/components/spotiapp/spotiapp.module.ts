import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpotiappRoutingModule } from './spotiapp-routing.module';
import { HomeComponent } from './home.component';
import { ArtistaComponent } from './artista/artista.component';
import { SearchComponent } from './search/search.component';
import { SharedComponent } from './shared/shared.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  declarations: [HomeComponent, ArtistaComponent, SearchComponent, SharedComponent, TarjetasComponent, PrincipalComponent],
  imports: [
    CommonModule,
    SpotiappRoutingModule
  ]
})
export class SpotiappModule { }
