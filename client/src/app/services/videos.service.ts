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
  URL_REST_API = 'http://localhost:8080/api/courses';

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
    return this.http.get<Videos[]>(this.URL_REST_API);
  }

  /**
   * Finds video by id
   * @param id
   * @returns video by id
   */
  findVideoById(id): Observable<Videos> {
    return this.http.get<Videos>(`${this.URL_REST_API}/${id}`);
  }

  /**
   * Adds video
   * @param video
   * @returns video
   */
  addVideo(video: Videos): Observable<Videos> {
    return this.http.post<Videos>(this.URL_REST_API, video);
  }

  /**
   * Updates videos service
   * @param video
   * @returns update
   */
  update(video:Videos) : Observable<Videos> {
    return this.http.put<Videos>(`${this.URL_REST_API}/${video.id}`, video)
  }

  /**
   * Delete videos service
   * @param id
   * @returns
 */
  deleteVideo(id): Observable<Videos> {
    return this.http.delete<Videos>(`${this.URL_REST_API}/${id}`)
  }
}
