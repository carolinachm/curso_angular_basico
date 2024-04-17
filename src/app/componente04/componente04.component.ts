import {Component} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-componente04',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './componente04.component.html',
  styleUrl: './componente04.component.css'
})
export class Componente04Component {
  //Variavel para exibir ou ocultar o quadrado
  exibir: boolean = false;

  //função para exibir o quadrado
  acao() {
    if(this.exibir === true) {
      this.exibir = false;
    } else {
      this.exibir = true;
    }
  }
}
