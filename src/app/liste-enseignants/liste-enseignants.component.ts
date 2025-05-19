import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import { Enseignant} from '../modeles';
import {ENSEIGNANTS} from '../mockup';

@Component({
  selector: 'app-liste-enseignants',
    imports: [
        NgForOf
    ],
  templateUrl: './liste-enseignants.component.html',
  styleUrl: './liste-enseignants.component.scss'
})
export class ListeEnseignantsComponent {
  enseignants: Enseignant[] = ENSEIGNANTS;

}
