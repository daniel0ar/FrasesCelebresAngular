import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmpleado } from './escritor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {
  
  private _url = "http://dataserverdaw.herokuapp.com/escritores"

  constructor(private http: HttpClient) { }

  geEscritores(): Observable<IEmpleado[]> {
    return this.http.get<IEmpleado[]>(this._url);
  }
}
