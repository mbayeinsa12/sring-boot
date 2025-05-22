import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../modeles';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { EnseignantsService } from '../services/enseignants.service';

@Component({
  selector: 'app-detail-enseignant',
  imports: [
    NgIf
  ],
  templateUrl: './detail-enseignant.component.html',
  styleUrl: './detail-enseignant.component.scss'
})
export class DetailEnseignantComponent implements OnInit {
  enseignant: Enseignant | undefined;
  protected errorMessage: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private enseignantService: EnseignantsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id enseignant:', id);
    if (id) {
      this.enseignantService.getEnseignantById(id).subscribe({
        next: (enseignant: Enseignant) => {
          this.enseignant = enseignant;
        },
        error: (error: any) => {
          if (error.status === 401) {
            this.errorMessage = 'Problème de connexion avec le serveur.';
          } else if (error.status === 404) {
            this.errorMessage = 'Enseignant non trouvé.';
          } else {
            this.errorMessage = 'Erreur de chargement avec le serveur. ' + error.status + ' message: ' + JSON.stringify(error.error);
          }
        },
        complete: () => {
          // Optionnel : actions à la fin du chargement
        }
      });
    }
  }
}
