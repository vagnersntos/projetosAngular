import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  cores:string = '#FFFFFF';
  tamanho:number = 12;

  objStyle:EstiloCss = new EstiloCss();
}

class EstiloCss {
  'color':string = '#33C9FF'
  'font-size.%':number = 80
  'font-weight':string = 'bold'
}
