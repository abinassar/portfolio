import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

// import { LOCALE_ID } from "@angular/core";
// import { capitalizadoPipe } from "./pipes/capitalizado.pipe";

//Angular Material

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';


// Servicios

import { DataService } from './shared/services/data.service';
import { PipesComponent } from './components/pipes/pipes.component';


@NgModule({ entryComponents:[UsuarioComponent],
  declarations: [
    AppComponent,
    UsuarioComponent,
    // UsuariosComponent,
    PipesComponent,
    // capitalizadoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatSidenavModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
