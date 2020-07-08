import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre = 'Gianfranco';
  nombre2 = 'GiANfranCO rafaEL AbiNaSSar AlastRE'
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.5383;
  salario = 5300.27;
  jugador = {
    nombre: 'Lionel Messi',
    equipo: 'Barcelona',
    habilidades : {
      goleador: true,
      asistidor: true
    }
  }

  valorDePromesa = new Promise ( (resolve, reject) => {
    setTimeout(() => {
      resolve('Activa Funcion Promesa')
    }, 3000);
  })

  fecha = new Date();



  constructor() { }

  ngOnInit(): void {
  }

}
