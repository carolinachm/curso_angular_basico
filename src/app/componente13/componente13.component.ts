import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {MediaPipe} from "../pipe/media.pipe";

@Component({
  selector: 'app-componente13',
  standalone: true,
  imports: [
    CommonModule,
    MediaPipe,
  ],
  templateUrl: './componente13.component.html',
  styleUrl: './componente13.component.css'
})
export class Componente13Component {
    //Variavel do tipo texto
  nome:string ='Carol';
  //Objeto
  obj:any = {'nome':'Carol', 'idade': '41'} ;

  //vetor de objeto
  alunos:any =[
    {'nome':'magali', 'nota1':8, 'nota2':9},
    {'nome':'cebolinha', 'nota1':7, 'nota2':10},
    {'nome':'monica', 'nota1':6, 'nota2':8},
    {'nome':'chico', 'nota1':5, 'nota2':10},

  ] ;
}
