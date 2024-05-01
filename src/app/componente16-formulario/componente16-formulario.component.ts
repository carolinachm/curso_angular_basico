import {Component, EventEmitter, Output} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-componente16-formulario',
  standalone: true,
  imports: [ MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './componente16-formulario.component.html',
  styleUrl: './componente16-formulario.component.css'
})
export class Componente16FormularioComponent {

  //Variavel para armazenar o nome informado
  nome:string='';

  @Output()
  funcao = new EventEmitter<string>();

  //Função de cadastro do componente formulario
  cadastrarNome(){
    this.funcao.emit(this.nome);
  }

}
