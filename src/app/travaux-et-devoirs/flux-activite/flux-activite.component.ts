import { Component, OnInit } from '@angular/core';
import { Videos } from 'src/app/models/videos';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-flux-activite',
  templateUrl: './flux-activite.component.html',
  styleUrls: ['./flux-activite.component.css']
})
export class FluxActiviteComponent implements OnInit {

  myVideos : Videos = {
    title:'',
    link:'',
    description:''
  }

  videos: Videos[]
  
  constructor(private videosService:VideosService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(){
    this.videosService.findAll().subscribe( video => {  this.videos = video;
      console.log(video);
    })
  }

}