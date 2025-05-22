import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../modeles';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EnseignantsService } from '../services/enseignants.service'; // <-- Correction ici

@Component({
  selector: 'app-liste-enseignants',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './liste-enseignants.component.html',
  styleUrl: './liste-enseignants.component.scss'
})
export class ListeEnseignantsComponent implements OnInit {
  enseignants: Enseignant[] = [];
  finChargement = false;
  errorMessage = "";
  selectEnseignant: number | undefined;
  overEnseignant: number | undefined;

  constructor(private enseignantsService: EnseignantsService) {} // <-- Correction ici

  ngOnInit(): void {
    this.loadEnseignants();
  }

  loadEnseignants(): void {
    this.finChargement = false;
    this.errorMessage = "";
    this.enseignants = [];
    this.enseignantsService.getAllEnseignant().subscribe({ // <-- Correction ici
      next: (enseignantsData: Enseignant[]) => {
        this.enseignants = enseignantsData;
      },
      error: (error: any) => {
        console.log("erreur de recup liste enseignants", error);
        this.finChargement = true;
        this.errorMessage = "erreur:" + error.status + " msg = " + error.error.message;
      },
      complete: () => {
        this.finChargement = true;
        this.errorMessage = "";
      }
    });
  }

  setselectedEnseignant(idEnseignant: number | undefined): void {
    this.selectEnseignant = idEnseignant;
  }

  setoverEnseignant(idEnseignant: number | undefined): void {
    this.overEnseignant = idEnseignant;
  }
}
