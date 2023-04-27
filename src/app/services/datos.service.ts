import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  private url = 'https://backend-gr0a.onrender.com/getDatos'

  constructor(private http:HttpClient) { }

  getDatos():Observable<any>{
    return this.http.get(this.url) //  ./assets/data/data.json  
  }
}
