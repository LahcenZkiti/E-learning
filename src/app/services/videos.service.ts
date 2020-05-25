import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videos } from '../models/videos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  urlYtb = 'http://localhost:3000/videos';

  constructor(private http:HttpClient) { }

  findAll() : Observable<Videos[]> {
    return this.http.get<Videos[]>(this.urlYtb);
  }

  findVideoById(id: number): Observable<Videos> {
    return this.http.get<Videos>(`${this.urlYtb}/${id}`);
  }

  addVideo(video: Videos): Observable<Videos> {
    return this.http.post<Videos>(this.urlYtb, video);
  }

  update(video:Videos) : Observable<Videos> {
    return this.http.put<Videos>(`${this.urlYtb}/${video.id}`, video)
  }
}
