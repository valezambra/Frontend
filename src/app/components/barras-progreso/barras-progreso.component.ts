import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/services/datos.service';
import { LogicaService } from 'src/app/services/logica.service';

@Component({
  selector: 'app-barras-progreso',
  templateUrl: './barras-progreso.component.html',
  styleUrls: ['./barras-progreso.component.css']
})
export class BarrasProgresoComponent {

  miPortafolio: any ={};
  formulario:FormGroup;
  cantidad:string="";
  constructor( private datos:DatosService, protected logica:LogicaService,protected formBuilder:FormBuilder){
    this.datos.getDatos().subscribe(data =>{this.miPortafolio = data;});
    this.formulario=formBuilder.group({
      nombre_hab:["",Validators.required],
      porcentaje:["",Validators.required]
    })
  }
  porcen(i:number):string{
    return this.cantidad = this.miPortafolio.habilidades[i].porcentaje + "%";
  }
  deleteSkill(id:number){
    if(confirm("Esta seguro de que desea borrar la skill?")){
      this.logica.delete("habilidad/",id).subscribe(data=>{window.location.reload()})
    }
  }
  postear(){
    if(this.formulario.valid){
      this.logica.post("habilidad",this.formulario.value).subscribe(data=>{window.location.reload()});
    }else{
      alert("Ups algun dato salio mal!")
    }
    
  }

}
