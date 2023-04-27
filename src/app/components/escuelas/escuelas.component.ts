import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from 'src/app/services/datos.service';
import { LogicaService } from 'src/app/services/logica.service';

@Component({
  selector: 'app-escuelas',
  templateUrl: './escuelas.component.html',
  styleUrls: ['./escuelas.component.css']
})
export class EscuelasComponent {
  miPortafolio: any;
  formulario : FormGroup;
  constructor( private datos:DatosService,protected logica:LogicaService,protected formBuilder:FormBuilder){
    this.datos.getDatos().subscribe(data =>{this.miPortafolio = data});
    this.formulario = formBuilder.group({
      escuela:["",Validators.required],
      titulo:["",Validators.required],
      inicio:["",Validators.required],
      fin:["",Validators.required]
    })
  }
  deleteEscuela(id:number){
    if(confirm("Se eliminara este registro, desea continuar?")){
      this.logica.delete("estudio/",id).subscribe(data=>{window.location.reload()})
    }
  }

  enviar(){
    if(this.formulario.valid){
    this.logica.post("estudio",this.formulario.value).subscribe(data=>{window.location.reload()});
    }
    else{
      alert("Ups algun dato salio mal")
    }
  }
}

