import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-componente10',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './componente10.component.html',
  styleUrl: './componente10.component.css'
})
export class Componente10Component {

  //variavel
  nome:string = '';
  cidade:string = '';

}
