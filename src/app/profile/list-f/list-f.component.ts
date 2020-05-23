import { Component, OnInit } from '@angular/core';
import { Formateurs } from 'src/app/models/formateurs';
import { FormateursService } from 'src/app/services/formateurs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-f',
  templateUrl: './list-f.component.html',
  styleUrls: ['./list-f.component.css']
})
export class ListFComponent implements OnInit {
  myFormateur : Formateurs={
    nom:'',
    prenom:'',
    email:'',
    tel:''
  }
  formateurs: Formateurs[]=[]

  constructor(private formateurService:FormateursService,
              private router:Router) { }

  ngOnInit(): void {
    this.getFormateurs();
  }

  getFormateurs(){
    this.formateurService.findAll().subscribe(formateurs =>{
      this.formateurs = formateurs;
    })
  }

  editFormateur(id: number) { 
    this.router.navigate(['/profile/edit', id]);
  };

  add(){
    this.router.navigate(['profile/add'])
  }

}
