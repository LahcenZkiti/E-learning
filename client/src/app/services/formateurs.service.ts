import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formateurs } from '../models/formateurs';
import { Observable } from 'rxjs';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class FormateursService {

  /**
   * Url  of formateurs service
   */
  url = 'http://localhost:8080/api/formateurs';


  /**
   * Creates an instance of formateurs service.
   * @param http
   */
  constructor(private http: HttpClient) { }

  /**
   * Finds all
   * @returns all
   */
  findAll() : Observable<Formateurs[]> {
    return this.http.get<Formateurs[]>(this.url);
  }

  /**
   * Finds by id
   * @param id
   * @returns by id
   */
  findById(id: number): Observable<Formateurs> {
    return this.http.get<Formateurs>(`${this.url}/${id}`);
  }

  /**
   * Adds formateur
   * @param formateur
   * @returns
   */
  addFormateur(formateur) {
    return this.http.post<Formateurs>(this.url, formateur);
  }

  /**
   * Updates formateurs service
   * @param formateur
   * @returns update
   */
  update(formateur:Formateurs) : Observable<Formateurs> {
    return this.http.put<Formateurs>(`${this.url}/${formateur.id}`, formateur)
  }

  /**
   * Delete formateur
   * @param id
   * @returns formateur
   */
  deletFormateur(id): Observable<Formateurs> {
    return this.http.delete<Formateurs>(`${this.url}/${id}`)
  }
}
