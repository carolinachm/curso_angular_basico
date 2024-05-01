import { Component } from '@angular/core';
import {Componente16FormularioComponent} from "../componente16-formulario/componente16-formulario.component";
import {Componente16TabelaComponent} from "../componente16-tabela/componente16-tabela.component";


@Component({
  selector: 'app-componente16',
  standalone: true,
  imports: [

    Componente16FormularioComponent,
    Componente16TabelaComponent
  ],
  templateUrl: './componente16.component.html',
  styleUrl: './componente16.component.css'
})
export class Componente16Component {

  //vetor
  nomes: string[] = ['Magali', 'Monica', 'Cebolinha','Casção', 'Anjinho', 'Chico Bento'];

  //função para cadastrar nomes
  cadastrar(nome:string){
    this.nomes.push(nome);
  }

}
