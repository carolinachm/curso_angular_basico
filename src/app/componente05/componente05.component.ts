import { Component } from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-componente05',
  standalone: true,
  imports: [NgFor],
  templateUrl: './componente05.component.html',
  styleUrl: './componente05.component.css'
})
export class Componente05Component {
  //Vetor de nomes
  nomes:string[] = ['Carolina', 'Jão', "Zé", "Maria"];

}
