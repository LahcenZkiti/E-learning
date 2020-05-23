import { Component, OnInit } from '@angular/core';
import { Formateurs } from 'src/app/models/formateurs';
import { FormateursService } from 'src/app/services/formateurs.service';
import { NgForm, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-f',
  templateUrl: './add-f.component.html',
  styleUrls: ['./add-f.component.css']
})
export class AddFComponent implements OnInit {

  myFormateur : Formateurs={
    nom:'',
    prenom:'',
    email:'',
    tel:'212'
  }
  formateurs: Formateurs[]=[]

  constructor(private formateursService:FormateursService,
              private router: Router) { }

  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ajouterFormateur(f:NgForm){
    this.formateursService.addFormateur(this.myFormateur).subscribe(formateur=> {
      this.formateurs = [formateur, ...this.formateurs];
      f.reset();
    })
  }

  annule(){
    this.router.navigate(['profile']);
  }
}
