import { Component} from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  //variavel pra ser avaliada na view pela diretiva *ngIf
  exiba!:boolean;
}
