import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {
    //Variável de imagem
  imagem:string  = 'asserts/dia.jpg';

  //Função para alterar imagem
  alterarImagem(){
    if(this.imagem === 'asserts/dia.jpg'){
      this.imagem = 'asserts/noite.jpeg';
    }else{
      this.imagem = 'asserts/dia.jpg';
    }
  }
}
