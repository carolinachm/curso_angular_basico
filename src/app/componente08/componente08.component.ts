import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  //variavel de media
  media:number = 10;
  //vetor de nomes
  nomes:string[] = ['jão', 'maria', 'ze']
  //linguagem
  linguagem:string = 'PHP'
}
