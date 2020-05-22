import { Component, OnInit } from '@angular/core';
import { FormateursService } from '../formateurs.service';
import {FormControl, Validators} from '@angular/forms';
import { Formateurs } from '../models/formateurs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  myFormateur: Formateurs = {
    nom: '',
    prenom: '',
    email: '',
    tel: '212'
  }

  formateurs: Formateurs[] =[] ;

  constructor(private formateurService: FormateursService,
              private router:Router) { }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ajoutFormateurs(f) {
    this.formateurService.addFormateur(this.myFormateur).subscribe((formateur)=>{
      this.formateurs = [formateur, ...this.formateurs];
      f.reset();
      console.log(JSON.stringify(formateur));
    })
  }

  annule() {
    this.router.navigate(['participant/list']);
  }

}
