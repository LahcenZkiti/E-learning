import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant';
import { Router } from '@angular/router';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class EtudiantsService {

  /**
   * Url  of etudiants service
   */
  url = 'http://localhost:8080/api/etudiants';


  /**
   * Creates an instance of etudiants service.
   * @param http
   * @param router
   */
  constructor(private http: HttpClient,
              private router:Router ) { }

  /**
   * Finds all
   * @returns all
   */
  findAll() : Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.url);
  }

  /**
   * Finds by id
   * @param id
   * @returns by id
   */
  findById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.url}/${id}`);
  }

  /**
   * Deletes etudiants service
   * @param id
   * @returns
   */
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }

  /**
   * Adds etudiant
   * @param etudiant
   * @returns
   */
  addEtudiant(etudiant) {
    return this.http.post<Etudiant>(this.url, etudiant);
  }

  /**
   * Updates etudiants service
   * @param etudiant
   * @returns update
   */
  update(etudiant:Etudiant) : Observable<Etudiant>{
    return this.http.put<Etudiant>(`${this.url}/${etudiant.id}`, etudiant)
  }



}
