import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  myEtudiant: Etudiant;

  constructor(private route: ActivatedRoute,
              private etudiantService:ServicesService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( id => {
      this.etudiantService.findById(id.id).subscribe(etudiant => {
        this.myEtudiant = etudiant;
        console.log(etudiant);
      }) ;
      console.log(id);
    })
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  updateEtud(f: NgForm){
    this.myEtudiant.age = new Date().getFullYear() - new Date(this.myEtudiant.date_de_naissance).getFullYear();
    this.etudiantService.update(this.myEtudiant).subscribe(etudiant =>{
      this.router.navigate(['participant/list']);
      f.reset();
      console.log(JSON.stringify(etudiant));
    })
  }



}
