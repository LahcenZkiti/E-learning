import { Component, OnInit } from '@angular/core';
import { Formateurs } from 'src/app/models/formateurs';
import { FormateursService } from 'src/app/services/formateurs.service';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Component
 */
@Component({
  selector: 'app-add-f',
  templateUrl: './add-f.component.html',
  styleUrls: ['./add-f.component.css']
})
export class AddFComponent implements OnInit {


  /**
   * My formateur of add fcomponent
   */
  myFormateur : Formateurs={
    firstname:'',
    lastname:'',
    email:'',
    phone:'212'
  }

  /**
   * Formateurs  of add fcomponent
   */
  formateurs: Formateurs[]

  /**
   * Creates an instance of add fcomponent.
   * @param formateursService
   * @param router
   */
  constructor(private formateursService:FormateursService,
              private router: Router){ }


  /**
   * on init
   */
  ngOnInit(): void {
  }

  /**
   * Email form control of add fcomponent
   */
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  /**
   * Ajouters formateur
   * @param f
   */
  ajouterFormateur(f:NgForm){
    this.formateursService.addFormateur(this.myFormateur).subscribe(formateur=> {
      this.formateurs = [formateur, ...this.formateurs];
      f.reset();
    })
  }


  /**
   * Annules add fcomponent
   */
  annule(){
    this.router.navigate(['profile']);
  }
}
