import {Component, OnInit} from '@angular/core';
import {Apprenant} from '../modeles';
import {ActivatedRoute} from '@angular/router';
import {NgIf} from '@angular/common';
import {ApprenantsService} from '../services/apprenants.service';

@Component({
  selector: 'app-details-apprenant',
  imports: [
    NgIf
  ],
  templateUrl: './details-apprenant.component.html',
  styleUrl: './details-apprenant.component.scss'
})
export class DetailsApprenantComponent implements  OnInit {
  apprenant: Apprenant | undefined;
  protected errorMessage: string | undefined;

  constructor(private route: ActivatedRoute,

              private apprenantsService: ApprenantsService) {
    // this.apprenant = this.apprrenantService.getApprenantById(id);
    // console.log('apprenant:', this.apprenant);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id:', id);
    if (id){
      this.apprenantsService.getApprenantById (id).subscribe({
        next: (apprenant: Apprenant) => {
          this.apprenant = apprenant;
        },
        error: (error: any) => {
          if(error.status === 401){
            this.errorMessage = 'Probleme de connexion avec le serveur.';
          }else {
            this.errorMessage='erreur de chargement avec le serveur.'+error.status+"message";
          }
          this.errorMessage = 'An error has occured';+error.status+"message:"+JSON.stringify(error);
        },
        complete: () => {

        }
      })
    }


  }
}
