import { Component, OnInit, Input } from '@angular/core';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import { Etudiant } from 'src/app/models/etudiant';
import { ActivatedRoute, Router } from '@angular/router';


/**
 * Component
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {


  /**
   * My etudiant of list component
   */
  myEtudiant: Etudiant = {
    nom:'',
    prenom:'',
    email:'',
    age:0,
    date_de_naissance:'',
    tel:''
  }


  /**
   * Etudiants  of list component
   */
  etudiants : Etudiant[] = []


  /**
   * Creates an instance of list component.
   * @param listService 
   * @param router 
   */
  constructor(private listService: EtudiantsService,
              private router:Router) { }


  /**
   * on init
   */
  ngOnInit(): void {
    this.getEtudiants();
  }


  /**
   * Gets etudiants
   */
  getEtudiants() {
    this.listService.findAll().subscribe(etudiants => this.etudiants = etudiants);
  }


  /**
   * Deletes etudiant
   * @param id 
   */
  deleteEtudiant(id) {
    this.listService.delete(id).subscribe(() => {
      this.etudiants = this.etudiants.filter(etudiant => etudiant.id != id );
    });
  };


  /**
   * Edits etudiant
   * @param etudiantId 
   */
  editEtudiant(etudiantId: number) { 
    this.router.navigate(['/edit/etudiants', etudiantId]);
  };

}
