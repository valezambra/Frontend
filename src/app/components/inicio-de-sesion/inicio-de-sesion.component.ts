import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogicaService } from 'src/app/services/logica.service';

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css']
})
export class InicioDeSesionComponent {
  formulario:FormGroup;

  constructor(private formBuilder:FormBuilder,private logica:LogicaService,private ruta:Router){
    this.formulario=this.formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      contraseña:["", [Validators.required,Validators.minLength(8)]],
    })
  }
  //Lo hice segun la master class
  get Email(){
    return this.formulario.get("email")
  }
  get Password(){
    return this.formulario.get("password")
  }
  get EmailValid(){
    return false
  }
  get PasswordValid(){
    return this.Password?.touched && !this.Password.valid;
  }
  get MailValid(){
    return false;
  }
  onEnviar(event:Event){
    event.preventDefault;

    if(this.formulario.valid){
      this.logica.iniciarSesion(this.formulario.value).subscribe(data=>{
        this.ruta.navigate(['/inicio']);
        localStorage.setItem('token',data.token)
      })
    }else{
      alert("ups algun dato salio mal");
      this.formulario.markAllAsTouched;
    }
  }
}
