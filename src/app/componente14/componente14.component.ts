import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {Produto} from "../../modelo/Produto";
import {ProdutoService} from "../servico/produto.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-componente14',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './componente14.component.html',
  styleUrl: './componente14.component.css'
})
export class Componente14Component {

  //Vetor para armazenar todos produtos
  vetor:Produto[] = [];

  //Visibilidade dos botoes
  btnCadastrar:boolean = true;

  //Objeto de formulario
  formulario = new FormGroup({
    id: new FormControl(null),
    nome:new FormControl('',[Validators.required, Validators.minLength(6)]),
    valor:new FormControl(null, [Validators.required, Validators.min(0)])

});
  // Termo pesquisado
  termoPesquisado: string = '';

  //Construtor
  constructor( private produtoService: ProdutoService) {}

  //Inicialização do componente
  //quando o componente tiver sido montado
  ngOnInit(){
    this.selecionar()
  }

  //metodo para selecionar todos os produtos
  selecionar(){
    this.produtoService.selecionar().subscribe(retorno => this.vetor = retorno);
  }
  //metodo para cadastrar produto
  cadastrar(){

    // Verifica se o nome informado já consta no vetor
    let posicaoNomeExistente = this.vetor.findIndex(obj => {return obj.nome === this.formulario.value.nome});

    if(posicaoNomeExistente != -1){
      alert('O nome informado já existe, cadastre outro produto.')
    }else{
      this.produtoService.cadastrar(this.formulario.value as Produto)
        .subscribe(retorno => {

          this.vetor.push(retorno);

          this.formulario.reset();

        });
    }

  }
  //metodo para selecionar o produtod especifico
  selecionarProduto(indice:number){
    this.formulario.setValue({
      id: this.vetor[indice].id,
      nome: this.vetor[indice].nome,
      valor: this.vetor[indice].valor,
    });
    this.btnCadastrar = false;
  }
  //metodo para alterar produto
  alterar(){
    this.produtoService.alterar(this.formulario.value as Produto
    ).subscribe(retorno => {
      //obter o inidice do objeto alterardo
      let indiceAlterado = this.vetor.findIndex(object => {
        return this.formulario.value.id === object.id;
      });
      //alterar o vetor
      this.vetor[indiceAlterado] = retorno;

      //limpar formulario
      this.formulario.reset();

      //visibiliadde dos botoes
      this.btnCadastrar = true;
    });
  }
  //metodo para remover produtos
  remover(){
    this.produtoService.remover(this.formulario.value.id)
      .subscribe(()=> {
          //Obter o indice que sera removido
        let indiceAlterado = this.vetor.findIndex(object => {
          return  object.id === this.formulario.value.id;
        });
        //Remover obj do vetor
        this.vetor.splice(indiceAlterado, 1);
      });
    //limpar o formulario
    this.formulario.reset();
    //visibilidade dos botoes
    this.btnCadastrar = true;
  }

}
