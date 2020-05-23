import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import {FormControl, Validators} from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
   myEtudiant: Etudiant = {
    nom:'',
    prenom:'',
    email:'',
    age: 0,
    date_de_naissance:'',
    tel:'212'
  }

  etudiants : Etudiant[] = [];

  constructor(private addService: EtudiantsService,
              private router:Router) { }
  

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ajoutEtudiant(){
    this.myEtudiant.age = new Date().getFullYear() - new Date(this.myEtudiant.date_de_naissance).getFullYear();
    this.addService.addEtudiant(this.myEtudiant).subscribe((etudiant) => {
      this.etudiants = [etudiant, ...this.etudiants];
      this.reset();
    })
  };

  annule() {
    this.router.navigate(['participant/list']);
  }

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
