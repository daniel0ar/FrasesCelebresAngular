import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmpleado } from './escritor';
import { Observable } from 'rxjs';
import { IFrase } from './frase';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {
  
  private _urlEscritores = "http://dataserverdaw.herokuapp.com/escritores";
  private _urlFrases = "http://dataserverdaw.herokuapp.com/escritores/frases";

  constructor(private http: HttpClient) { }

  geEscritores(): Observable<IEmpleado[]> {
    return this.http.get<IEmpleado[]>(this._urlEscritores);
  }

  getFrases(): Observable<IFrase[]> {
    return this.http.get<IFrase[]>(this._urlFrases);
  }
}
