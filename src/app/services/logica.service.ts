import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogicaService {
  private url:string ='https://backend-gr0a.onrender.com/';

  constructor(private http:HttpClient) { }
  iniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url + 'login',credenciales).pipe(map(data=>{
      return data;
    }))
  }
  crearUsuario(credenciales:any):Observable<any>{
    return this.http.post(this.url + 'crear/usuario',credenciales).pipe(map(data=>{
      return data;
    }))
  }
  logIn():boolean{
    return (localStorage.getItem('token') !== null) ? true : false
  }
  logOut(){
    localStorage.removeItem('token')
  }
  getDatos():Observable<any>{
    return this.http.get(this.url)
  }
  post(elem:string,valor:any):Observable<Object>{
    return this.http.post(this.url + 'crear/' + elem,valor).pipe(map(data=>{
      return data;
    }));
  }
  delete(elem:string,id:number):Observable<Object>{
    console.log(elem + id)
    return this.http.delete(this.url +'eliminar/'+elem+ id).pipe(map(data=>{
      return data;
    }));
  }
}
