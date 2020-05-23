import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  url = 'http://localhost:3000/etudiants';


  constructor(private http: HttpClient,
              private router:Router ) { }

  findAll() : Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.url);
  }

  findById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.url}/${id}`);
  }

  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }

  addEtudiant(etudiant) {
    return this.http.post<Etudiant>(this.url, etudiant);
  }

  update(etudiant:Etudiant) : Observable<Etudiant>{
    return this.http.put<Etudiant>(`${this.url}/${etudiant.id}`, etudiant)
  }


 
}
