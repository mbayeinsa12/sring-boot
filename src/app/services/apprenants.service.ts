import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Apprenant, Enseignant} from '../modeles';

@Injectable({
  providedIn: 'root'
})
export class ApprenantsService {
  urlListeApprenants = "http://localhost:8081/apprenants";

  constructor(
    private _http: HttpClient
  ) {}

  getAllApprenant(): Observable<Apprenant[]> {
    return this._http.get<Apprenant[]>(this.urlListeApprenants);
  }
  getApprenantById(idApprenant: string): Observable<Apprenant> {
    //premiere facon a faire
    const url =`http://localhost:8081/apprenants/${idApprenant}`;
    //Deuxieme maniere a faire
    // const url = `${this.urlListeApprenants}/${idApprenant}`;
    //Troisieme maniere a faire
    // const url = this.urlListeApprenants + '/' + idApprenant
    return this._http.get<Apprenant>(url);
  }
}
