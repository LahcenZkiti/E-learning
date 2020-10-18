import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videos } from '../models/videos';
import { Observable } from 'rxjs';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class VideosService {

  /**
   * Url ytb of videos service
   */
  urlYtb = 'http://localhost:8080/api/courses';

  /**
   * Creates an instance of videos service.
   * @param http
   */
  constructor(private http:HttpClient) { }

  /**
   * Finds all
   * @returns all
   */
  findAll() : Observable<Videos[]> {
    return this.http.get<Videos[]>(this.urlYtb);
  }

  /**
   * Finds video by id
   * @param id
   * @returns video by id
   */
  findVideoById(id: number): Observable<Videos> {
    return this.http.get<Videos>(`${this.urlYtb}/${id}`);
  }

  /**
   * Adds video
   * @param video
   * @returns video
   */
  addVideo(video: Videos): Observable<Videos> {
    return this.http.post<Videos>(this.urlYtb, video);
  }

  /**
   * Updates videos service
   * @param video
   * @returns update
   */
  update(video:Videos) : Observable<Videos> {
    return this.http.put<Videos>(`${this.urlYtb}/${video.id}`, video)
  }
}
