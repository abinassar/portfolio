import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { PipesComponent } from "./components/pipes/pipes.component";
// import { HomeComponent } from "./components/home/home.component";
import { PipesModule } from './components/pipes/pipes.module';


const routes: Routes = [

  // {
  //   path: 'usuarios',
  //   loadChildren: () => import('./components/usuarios/usuarios.module').then(m => m.UsuariosModule),
  // },

  // {path: 'pipes',component:PipesComponent},
  // // {path: 'spotify',component:HomeComponent},
  // // {path: 'usuarios',component:UsuariosComponent,
  // // children: [
  // //   {path: 'spotiapp',
  // //   loadChildren: './components/spotiapp/spotiapp.module#SpotiappModule'} 
  // // ]},
  // {path: 'usuario/:id',component:UsuarioComponent},
  // {path: '**', pathMatch: 'full', redirectTo: 'usuarios'}
  {
    path: `home`, loadChildren: () =>
      import('./components/home.module').then(m => m.HomeModule)
  },
  {
    path: `spotiapp`, loadChildren: () =>
      import('../app/components/spotiapp/spotiapp.module').then(m => m.SpotiappModule)
  },
  {
    path: `pipes`, loadChildren: () =>
      import('../app/components/pipes/pipes.module').then(m => m.PipesModule)
  },
  { path: `**`, redirectTo: `home`, pathMatch: `full` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
