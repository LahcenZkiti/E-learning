import { Component, OnInit } from '@angular/core';
import { Videos } from 'src/app/models/videos';
import { VideosService } from 'src/app/services/videos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

/**
 * Component
 */
@Component({
  selector: 'app-edit-flux',
  templateUrl: './edit-flux.component.html',
  styleUrls: ['./edit-flux.component.css']
})
export class EditFluxComponent implements OnInit {

  /**
   * My videos of edit flux component
   */
  myVideos: Videos

  /**
   * Creates an instance of edit flux component.
   * @param videosService 
   * @param router 
   * @param route 
   */
  constructor(private videosService:VideosService,
              private router:Router,
              private route:ActivatedRoute) { }

  /**
   * on init
   */
  ngOnInit(): void {
    this.route.params.subscribe(videoId => {
      this.videosService.findVideoById(videoId.id).subscribe(video => {
        this.myVideos = video ;
      })
    })
  }

  /**
   * Edits videos
   * @param f 
   */
  editVideos(f:NgForm) {
    this.videosService.update(this.myVideos).subscribe(videos => {
      this.router.navigate(['cours']);
      f.reset();
      console.log(JSON.stringify(videos));
    })
  }


}
