import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  title:string = 'Implementação de pipes';
  numFloat:number = 678.94;
  dataHoje:Date = new Date();
  numDecimal:number = 78934567.9563;

  objLiteral = {
    nome: 'vagner',
    endereco: {
      cidade: 'Salvador',
      estado: 'Bahia'
    }
  }

  mesesAno:Array<string> = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  numPercent:number = 0.29;

}
