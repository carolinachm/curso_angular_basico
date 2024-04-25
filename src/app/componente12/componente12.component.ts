import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Pessoa} from "../../modelo/Pessoa";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {
      //Criando objeto formulario
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required,Validators.minLength(6)]),
    idade: new FormControl(null,[Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('', [Validators.required,Validators.minLength(6)]),
  });
  //vibilidade dos botoes
  btnCadastrar:boolean = true;
  //vetor para armazenar pessoas
  vetor:Pessoa[] = [];
  //Armazenar indice da pessoa selecionada
  indice:number = -1;
  //funcao de cadastro
  cadastrar(){
    //Cadastro do vetor
    this.vetor.push(this.formulario.value as Pessoa);
    //limpar os inputs
    this.formulario.reset();
    //visualizar no console
    //console.table(this.vetor)
  }
  //funcao selecionar
  selecionar(indice:number){
    //atribuir o indice
    this.indice = indice;
    // Atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade,
    });
    //visibilidade dos botoes
    this.btnCadastrar = false;
  }
  //Funcao alterar
  alterar(){
    //Alterar o vetor
    this.vetor[this.indice]= this.formulario.value as Pessoa;

    //limpar inputs
    this.formulario.reset();

    //visibilidade do botao
    this.btnCadastrar = true;

  }
  //função para remover
  remover(){
    //removendo uma pessoa do vetor
    this.vetor.splice(this.indice, 1);
    //limpeza dos inputs
    this.formulario.reset();
    //visibilidade dos botoes
    this.btnCadastrar = true;
  }
  //funcao para cancelar
  cancelar(){
    this.formulario.reset();
    this.btnCadastrar = true;
  }
}
