import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  uriUsuario= 'https://app-rest-abin.firebaseio.com/usuarios.json'

  constructor( private http: HttpClient) {}


  agregarUsuario( usuario: Usuario ){

    let body = JSON.stringify(usuario);
    let headers = new HttpHeaders({
      'ContentType' : 'application-json'
    });

    return this.http.post( this.uriUsuario, body , {headers} )
      // .map( res => {
      //   console.log(res.json());
      //   return res.json()
      // })

  }
}
