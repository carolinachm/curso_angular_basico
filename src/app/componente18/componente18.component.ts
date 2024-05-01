import { Component } from '@angular/core';

@Component({
  selector: 'app-componente18',
  standalone: true,
  imports: [],
  templateUrl: './componente18.component.html',
  styleUrl: './componente18.component.css'
})
export class Componente18Component {

  //Variavel nome
  nome:string = 'Carol';

  //Variavel media
  media:number = 0;

  //funcao para calcular media
  calculo(n1:number, n2:number){
      return (n1 + n2)/2;
  }

}
