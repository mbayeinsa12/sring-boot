import {Component, OnInit} from '@angular/core';
import {Apprenant, Enseignant} from '../modeles';
import {APPRENANTS} from '../mockup';
import {JsonPipe, NgForOf, NgIf} from '@angular/common';
import {ApprenantsService} from '../services/apprenants.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-liste-apprenants',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './liste-apprenants.component.html',
  styleUrl: './liste-apprenants.component.scss'
})
export class ListeApprenantsComponent  implements OnInit {
  apprenants: Apprenant[] = [];
  finChargement = false;
  errorMessage = "";
  selectApprenant : Number|undefined;
  overApprenant: number | undefined;

  constructor(private apprenantsService:ApprenantsService) {
  }

  ngOnInit(): void{
    this.loadApprenants();

  }

  loadApprenants(): void {
    this.finChargement = false;
    this.errorMessage = "";
    this.apprenants = [];
    this.apprenantsService.getAllApprenant().subscribe({
      next: (apprenantsData: Apprenant[]) => {
        this.apprenants = apprenantsData;
      },
      error:(error:any) => {
        console.log("erreur de recup liste apprenants", error);
        this.finChargement = true;
        this.errorMessage = "erreur:" +error.status+" msg = "+error.error.message;
      },
      complete: () => {
        this.finChargement = true;
        this.errorMessage = "";
      }
    })

  }
  //methode set apprenant
  setselectedApprenant(idApprenant:Number|undefined):void{
    this.selectApprenant = idApprenant;
  }
  setoverApprenant(idApprenant:number|undefined):void {
    this.overApprenant = idApprenant;
  }
}
