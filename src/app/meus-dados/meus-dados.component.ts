import { Component} from '@angular/core';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent {

  public meusDados:Array<any> = [{
    nome: 'Vagner Santos',
    idade: 33,
    estado:'BA',
    cidade: 'Salvador'
  }];
}
