import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Enseignant} from '../modeles';

@Injectable({
  providedIn: 'root'
})
export class EnseignantsService {
  urlListeEnseignants = "http://localhost:8081/enseignants";

  constructor(
    private _http: HttpClient
  ) {}
  getAllEnseignant(): Observable<Enseignant[]> {
    return this._http.get<Enseignant[]>(this.urlListeEnseignants);
  }
  getEnseignantById(idEnseignant: string): Observable<Enseignant> {
    const url = `http://localhost:8081/enseignants/${idEnseignant}`;
    return this._http.get<Enseignant>(url);
  }

  deleteEnseignantById(id: number):Observable<void>{
    const url =`http://localhost:8081/enseignants/${id}`;
    return this._http.delete<void>(url);
  }

}
