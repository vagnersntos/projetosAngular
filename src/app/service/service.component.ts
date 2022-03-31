import { Component } from '@angular/core';
import { Produto } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
//declaração das propriedades que serão usadas
produtos!:Produto[]

constructor(private objDoService: ProductService) {

  }
  //criar uma função para através do uso do objeto criado
  //acessar a lista de produtos
  acessandoProdutos(){
    this.produtos = this.objDoService.getProdutos();
  }
}
