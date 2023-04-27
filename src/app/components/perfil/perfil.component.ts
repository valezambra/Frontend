import { Component } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { LogicaService } from 'src/app/services/logica.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  miPortafolio: any ={};

  constructor( private datos:DatosService, protected logica:LogicaService){
    this.datos.getDatos().subscribe(data =>
      {
        this.miPortafolio = data;
        console.log(data);
      }
    );
  }

}
