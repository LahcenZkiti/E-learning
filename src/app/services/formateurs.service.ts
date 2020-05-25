import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formateurs } from '../models/formateurs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateursService {

  // url de json server de fomateurs
  url = 'http://localhost:3000/formateurs';

  //le constructeur de FormateursService et l'injection de httpClient et Router pour changer des requetes http et des liens des pages
  constructor(private http: HttpClient) { }

  //la methode findAll() return les formateurs
  findAll() : Observable<Formateurs[]> {
    return this.http.get<Formateurs[]>(this.url);
  }

  //le methode findById() return un formateur avec un id 
  findById(id: number): Observable<Formateurs> {
    return this.http.get<Formateurs>(`${this.url}/${id}`);
  }

  // la methode addFormateurs() return un formateur se forme d'un objet
  addFormateur(formateur) {
    return this.http.post<Formateurs>(this.url, formateur);
  }

  //la methode update() return un formateur a modifier 
  update(formateur:Formateurs) : Observable<Formateurs> {
    return this.http.put<Formateurs>(`${this.url}/${formateur.id}`, formateur)
  }
}
