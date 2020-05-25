import { Component, OnInit } from '@angular/core';
import { Videos } from 'src/app/models/videos';
import { VideosService } from 'src/app/services/videos.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout-activite',
  templateUrl: './ajout-activite.component.html',
  styleUrls: ['./ajout-activite.component.css']
})
export class AjoutActiviteComponent implements OnInit {

  myVideos : Videos = {
    title:'',
    link:'',
    description:''
  }

  videos: Videos[]
  constructor(private videosService:VideosService,
              private router:Router) { }

  ngOnInit(): void {
  }

  ajoutVideos(f:NgForm) {
    this.videosService.addVideo(this.myVideos).subscribe(video =>{
      this.myVideos = video;
      f.reset();
      console.log(JSON.stringify(video));
    })
  }

  annule(){
    this.router.navigate(['cours']);
  }

}
