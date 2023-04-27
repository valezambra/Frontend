import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BarraComponent } from './components/barra/barra.component';
import { HttpClientModule } from '@angular/common/http';
import { EscuelasComponent } from './components/escuelas/escuelas.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { BarrasProgresoComponent } from './components/barras-progreso/barras-progreso.component';
import { PieDePaginaComponent } from './components/pie-de-pagina/pie-de-pagina.component';
import { InicioDeSesionComponent } from './components/inicio-de-sesion/inicio-de-sesion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatosService } from './services/datos.service';
import { LogicaService } from './services/logica.service';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    BarraComponent,
    EscuelasComponent,
    Pagina404Component,
    ExperienciasComponent,
    BarrasProgresoComponent,
    PieDePaginaComponent,
    InicioDeSesionComponent,
    InicioComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DatosService,
    LogicaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
