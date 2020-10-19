import { Component, OnInit } from '@angular/core';
import { Videos } from 'src/app/models/videos';
import { VideosService } from 'src/app/services/videos.service';
import { Router } from '@angular/router';

/**
 * Component
 */
@Component({
  selector: 'app-flux-activite',
  templateUrl: './flux-activite.component.html',
  styleUrls: ['./flux-activite.component.css']
})
export class FluxActiviteComponent implements OnInit {

  /**
   * My videos of flux activite component
   */
  myVideos : Videos = {
    title:'',
    link:'',
    description:''
  }

  /**
   * Videos  of flux activite component
   */
  videos: Videos[]

  /**
   * Creates an instance of flux activite component.
   * @param videosService
   * @param router
   */
  constructor(private videosService:VideosService,
              private router:Router) { }

  /**
   * on init
   */
  ngOnInit(): void {
    this.getVideos();
  }

  /**
   * Gets videos
   */
  getVideos(){
    this.videosService.findAll().subscribe( video => {  this.videos = video;
      console.log(video);
    })
  }

  /**
   * Edits flux activite component
   * @param videoId
   */
  edit(videoId: number) {
    this.router.navigate(['cours/edit', videoId]);
  }

  /**
   * Delete video
   * @param id
   */
  deleteVideo(id){
    if(confirm("Are you sure to delete this cours")){
      this.videosService.deleteVideo(id).subscribe(() => {
        this.videos = this.videos.filter(video => video.id != id)
        console.log("video deleted!!", id)
      })
    }
  }
}
