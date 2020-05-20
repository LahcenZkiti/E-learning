import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Etudiant } from './models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url = 'http://localhost:3000/etudiants';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Etudiant[]>(this.url);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }

  addEtudiant(etudiant) {
    return this.http.post<Etudiant>(this.url, etudiant);
  }
 
}
