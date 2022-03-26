import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-alpha-impacta';
  nome:string = 'Vagner Santos';
  ano:number = 2022;

  public texto:string ='Este Texto será Exibido na Janela de Alerta';
  public outroTexto:string = 'Texto enviado do componente principal para o componente secundário!';
}
