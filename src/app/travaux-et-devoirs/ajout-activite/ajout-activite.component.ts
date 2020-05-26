import { Component, OnInit } from '@angular/core';
import { Videos } from 'src/app/models/videos';
import { VideosService } from 'src/app/services/videos.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

/**
 * Component
 */
@Component({
  selector: 'app-ajout-activite',
  templateUrl: './ajout-activite.component.html',
  styleUrls: ['./ajout-activite.component.css']
})
export class AjoutActiviteComponent implements OnInit {

  /**
   * My videos of ajout activite component
   */
  myVideos : Videos = {
    title:'',
    link:'',
    description:''
  }

  /**
   * Videos  of ajout activite component
   */
  videos: Videos[]

  /**
   * Creates an instance of ajout activite component.
   * @param videosService 
   * @param router 
   */
  constructor(private videosService:VideosService,
              private router:Router) { }

  /**
   * on init
   */
  ngOnInit(): void {
  }

  /**
   * Ajouts videos
   * @param f 
   */
  ajoutVideos(f:NgForm) {
    this.videosService.addVideo(this.myVideos).subscribe(video =>{
      this.myVideos = video;
      f.reset();
      console.log(JSON.stringify(video));
    })
  }

  /**
   * Annules ajout activite component
   */
  annule(){
    this.router.navigate(['cours']);
  }

}
