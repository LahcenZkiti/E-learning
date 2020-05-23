import { Component, OnInit, Input } from '@angular/core';
import { EtudiantsService } from 'src/app/services/etudiants.service';
import { Etudiant } from 'src/app/models/etudiant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  myEtudiant: Etudiant = {
    nom:'',
    prenom:'',
    email:'',
    age:0,
    date_de_naissance:'',
    tel:''
  }

  etudiants : Etudiant[] = []

  constructor(private listService: EtudiantsService,
              private router:Router) { }

  ngOnInit(): void {
    this.getEtudiants();
  }

  getEtudiants() {
    this.listService.findAll().subscribe(etudiants => this.etudiants = etudiants);
  }

  deleteEtudiant(id) {
    this.listService.delete(id).subscribe(() => {
      this.etudiants = this.etudiants.filter(etudiant => etudiant.id != id );
    });
  };

  editEtudiant(etudiantId: number) { 
    this.router.navigate(['/edit/etudiants', etudiantId]);
  };

}
