import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent  {

  //criando o emissor do evento que enviará um dataset para o component-pai
  @Output() emissor = new EventEmitter<any>();
  
  //criando Obejto para receber os dados
  public Objeto:any = {};

  //criando uma função que usao o emissor para enviar os dados
  public enviarDados():void{
    this.emissor.emit(this.Objeto)
  }
}
