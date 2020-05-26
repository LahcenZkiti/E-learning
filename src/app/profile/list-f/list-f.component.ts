import { Component, OnInit } from '@angular/core';
import { Formateurs } from 'src/app/models/formateurs';
import { FormateursService } from 'src/app/services/formateurs.service';
import { Router } from '@angular/router';

/**
 * Component
 */
@Component({
  selector: 'app-list-f',
  templateUrl: './list-f.component.html',
  styleUrls: ['./list-f.component.css']
})
export class ListFComponent implements OnInit {

  /**
   * My formateur of list fcomponent
   */
  myFormateur : Formateurs={
    nom:'',
    prenom:'',
    email:'',
    tel:''
  }

  /**
   * Formateurs  of list fcomponent
   */
  formateurs: Formateurs[]=[]


  /**
   * Creates an instance of list fcomponent.
   * @param formateurService 
   * @param router 
   */
  constructor(private formateurService:FormateursService,
              private router:Router) { }

  /**
   * on init
   */
  ngOnInit(): void {
    this.getFormateurs();
  }

  /**
   * Gets formateurs
   */
  getFormateurs(){
    this.formateurService.findAll().subscribe(formateurs =>{
      this.formateurs = formateurs;
    })
  }

  /**
   * Edits formateur
   * @param id 
   */
  editFormateur(id: number) { 
    this.router.navigate(['/profile/edit', id]);
  };

  /**
   * Adds list fcomponent
   */
  add(){
    this.router.navigate(['profile/add'])
  }

}
