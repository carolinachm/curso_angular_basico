import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-componente16-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente16-tabela.component.html',
  styleUrl: './componente16-tabela.component.css'
})
export class Componente16TabelaComponent {
  @Input() vetor: string[] = [];

}
