import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/models/etudiant';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { EtudiantsService } from 'src/app/services/etudiants.service';

/**
 * Component
 */
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  /**
   * My etudiant of update component
   */
  myEtudiant: Etudiant;


  /**
   * Creates an instance of update component.
   * @param route 
   * @param etudiantService 
   * @param router 
   */
  constructor(private route: ActivatedRoute,
              private etudiantService:EtudiantsService,
              private router: Router) { }

  
  /**
   * on init
   */
  ngOnInit(): void {
    this.route.params.subscribe( id => {
      this.etudiantService.findById(id.id).subscribe(etudiant => {
        this.myEtudiant = etudiant;
        console.log(etudiant);
      }) ;
      console.log(id);
    })
  }


  /**
   * Email form control of update component
   */
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  /**
   * Updates etud
   * @param f 
   */
  updateEtud(f: NgForm){
    this.myEtudiant.age = new Date().getFullYear() - new Date(this.myEtudiant.date_de_naissance).getFullYear();
    this.etudiantService.update(this.myEtudiant).subscribe(etudiant =>{
      this.router.navigate(['participant/list']);
      f.reset();
      console.log(JSON.stringify(etudiant));
    })
  }



}
