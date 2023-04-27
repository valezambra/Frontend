import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/services/datos.service';
import { LogicaService } from 'src/app/services/logica.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {
  protected miPortafolio:any;
  protected formulario:FormGroup;

  constructor(private datos:DatosService, protected logica:LogicaService,protected formBuilder:FormBuilder){
    this.datos.getDatos().subscribe(data =>
      {
        this.miPortafolio = data;
      });
      this.formulario=formBuilder.group({
        titulo:["",Validators.required],
        descripcion:["",Validators.required]
      });
  }

  
deleteExp(id:number){
  if(confirm("Esta seguro de que desea borrar la experiencia?")){
    this.logica.delete("experiencia/",id).subscribe(data=>{window.location.reload()})
  }
}
postear(){
  this.logica.post("experiencia",this.formulario.value).subscribe(data=>{window.location.reload()})
}
}
