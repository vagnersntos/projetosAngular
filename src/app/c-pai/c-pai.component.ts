import { Component } from '@angular/core';

@Component({
  selector: 'app-c-pai',
  templateUrl: './c-pai.component.html',
  styleUrls: ['./c-pai.component.css']
})
export class CPaiComponent {

  // public texto:string ='Este Texto será Exibido na Janela de Alerta';
  // public outroTexto:string = 'Texto enviado do componente principal para o componente secundário!';
  
  public recebendoDados(dadosRecebidos:any){
    let receptor:string = 'Obrigado por se cadastrar ' + dadosRecebidos.nome + '.' + '\n';
    receptor = receptor + 'O email ' + dadosRecebidos.email + 'foi cadastrado com Sucesso!';
    alert(receptor);
  }
}
