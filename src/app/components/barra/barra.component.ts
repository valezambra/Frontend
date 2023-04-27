import { Component } from '@angular/core';
import { LogicaService } from 'src/app/services/logica.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent {
  constructor(protected logica:LogicaService){}
}
