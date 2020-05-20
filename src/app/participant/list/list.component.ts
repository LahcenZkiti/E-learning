import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  etudiants : Etudiant[] = [];
  constructor(private listService: ServicesService) { }

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


}
