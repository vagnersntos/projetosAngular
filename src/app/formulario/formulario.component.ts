import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //criar a função para receber os dados
  receberDados(dadosRecebidos:any){
    alert('O email recebido foi: ' + dadosRecebidos.email)
  }
}
