import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ArtistaComponent } from './artista/artista.component';


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent},
  { path: 'artista', component: ArtistaComponent},
  { path: `**`, redirectTo: `principal`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotiappRoutingModule { }
