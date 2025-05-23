import {Component, OnInit} from '@angular/core';
import {Apprenant} from '../modeles';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {ApprenantsService} from '../services/apprenants.service';

@Component({
  selector: 'app-details-apprenant',
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './details-apprenant.component.html',
  styleUrl: './details-apprenant.component.scss'
})
export class DetailsApprenantComponent implements  OnInit {
  apprenant: Apprenant | undefined;
  protected errorMessage: string | undefined;

  constructor(private route: ActivatedRoute,

              private apprenantsService: ApprenantsService,private router: Router) {
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
  deleteApprenant(id:number | undefined){

    if(id){
      this.apprenantsService.deleteApprenantById(id).subscribe({
        error:(error)=>{
          if(error.status === 0){
            this.errorMessage = 'Probleme de connexion avec le serveur.';
          }else{
            this.errorMessage=`Erreur de suppression de l'apprenant dont l'id est :${id},code : ${error.status};message:${error.errors}`;
          }
        },
        complete: () => {
          this.router.navigate(['/liste-apprenants']);
        }
      })
    }else{
      alert("pas d'id en parametre")
    }

  }
}
