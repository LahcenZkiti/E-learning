import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import {FormControl, Validators} from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';
import { Router } from '@angular/router';


/**
 * Component
 */
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  

   /**
    * My etudiant of add component
    */
   myEtudiant: Etudiant = {
    nom:'',
    prenom:'',
    email:'',
    age: 0,
    date_de_naissance:'',
    tel:'212'
  }


  /**
   * Etudiants  of add component
   */
  etudiants : Etudiant[] = [];
  
  /**
   * Creates an instance of add component.
   * @param addService 
   * @param router 
   */
  constructor(private addService: EtudiantsService,
              private router:Router) { }
  

  ngOnInit(): void {
  }


  /**
   * Email form control of add component
   */
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  
  /**
   * Ajouts etudiant() pour ajouter un etudiant
   */
  ajoutEtudiant(){
    this.myEtudiant.age = new Date().getFullYear() - new Date(this.myEtudiant.date_de_naissance).getFullYear();
    this.addService.addEtudiant(this.myEtudiant).subscribe((etudiant) => {
      this.etudiants = [etudiant, ...this.etudiants];
      this.reset();
    })
  };


  /**
   * Annules add component
   */
  annule() {
    this.router.navigate(['participant/list']);
  }


  /**
   * Resets add component
   */
  reset() {
    this.myEtudiant = {
      nom:'',
      prenom:'',
      email:'',
      age:0,
      date_de_naissance:'',
      tel:''
    }
  };

}
