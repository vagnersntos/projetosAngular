import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c-input-filho',
  templateUrl: './c-input-filho.component.html',
  styleUrls: ['./c-input-filho.component.css'],
})
export class CInputFilhoComponent {

  @Input() public mensagem:string = '';
  @Input('alerta') public outraMensagem:string = '';

  public exibirMensagemAlerta():void{
    alert(this.outraMensagem)
  }
}
