import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [
      ReactiveFormsModule,
  ],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  formulario = new FormGroup({
    nome: new FormControl(''),
    cidade: new FormControl('')
  });
}
