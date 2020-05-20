import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import {FormControl, Validators} from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';


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
    date_de_naissance:'',
    tel:''
  }

  constructor(private addService: ServicesService) { }
  etudiants : Etudiant[] = [];

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ajoutEtudiant(){
    this.addService.addEtudiant(this.myEtudiant).subscribe((etudiant) => {
      this.etudiants = [etudiant, ...this.etudiants];
    });
  };

  reset() {
    this.myEtudiant = {
      nom:'',
      prenom:'',
      email:'',
      date_de_naissance:'',
      tel:''
    }
  }


}
