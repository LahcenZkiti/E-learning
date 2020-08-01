import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormateursService } from 'src/app/services/formateurs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateurs } from 'src/app/models/formateurs';

/**
 * Component
 */
@Component({
  selector: 'app-edit-f',
  templateUrl: './edit-f.component.html',
  styleUrls: ['./edit-f.component.css']
})
export class EditFComponent implements OnInit {

  /**
   * My formateur of edit fcomponent
   */
  myFormateur: Formateurs;

  /**
   * Creates an instance of edit fcomponent.
   * @param formateursService 
   * @param route 
   * @param router 
   */
  constructor(private formateursService:FormateursService,
              private route:ActivatedRoute,
              private router:Router) { }

  
  /**
   * on init
   */
  ngOnInit(): void {
    this.route.params.subscribe(id=> {
      this.formateursService.findById(id.id).subscribe(formateur => {
        this.myFormateur = formateur;
        console.log(formateur);
      })
    })
  }

  /**
   * Updates formateur
   * @param f 
   */
  updateFormateur(f:NgForm){
    this.formateursService.update(this.myFormateur).subscribe( formateur => {
      this.router.navigate(['profile']);
      f.reset();
      console.log(JSON.stringify(formateur));
    })
  }

}
