import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Formateurs } from './models/formateurs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateursService {

  // url de json server de fomateurs
  url = 'http://localhost:3000/formateurs';

  //le constructeur de FormateursService et l'injection de httpClient et Router pour changer des requetes http et des liens des pages
  constructor(private http: HttpClient,
              private router: Router) { }

  //la methode findAll() return les formateurs se forme de tablau
  findAll() : Observable<Formateurs[]> {
    return this.http.get<Formateurs[]>(this.url);
  }

  // la methode ddFormateurs return un formateurs se forme d'un objet
  addFormateur(formateur) {
    return this.http.post<Formateurs>(this.url, formateur);
  }
}
