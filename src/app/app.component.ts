import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnteteComponent } from "./entete/entete.component";
import { PiedPageComponent } from "./pied-page/pied-page.component";
import { DetailsApprenantComponent } from "./details-apprenant/details-apprenant.component";
import { DetailEnseignantComponent} from './detail-enseignant/detail-enseignant.component';
import {MenuComponent} from './menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnteteComponent, PiedPageComponent, DetailsApprenantComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ecole = 'ISEP Diamnadio';
  departement_code = 'TIC';
  departement_nom = "Techonologie de l'Informatique et de la Communication";
  filliere_code = 'DBE';
  filliere_nom = 'Developpement Back-end';
  nbClick = 0;




 increment(){
  this.nbClick=this.nbClick+1;
 }
}
