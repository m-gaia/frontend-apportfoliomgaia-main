import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Usuario } from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})

export class EncabezadoService {
  private apiServerUrl='https://portfoliomgaia.herokuapp.com';

  constructor(private http: HttpClient) { }

 /* public obtenerUsuario():Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiServerUrl}/usuario/id/1`);
  }*/

  public actualizarUsuario(usuario: Usuario):Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiServerUrl}/usuario/actualizar`, usuario);
  }

  public agregarUsuario(usuario : Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.apiServerUrl}/usuario/agregar`,usuario);
  }
}
