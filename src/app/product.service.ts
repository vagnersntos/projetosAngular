import { Injectable } from '@angular/core';
import { Produto } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //criar uma função para retornar uma lista de produtos
  public getProdutos(){
    //propriedade que lista os produtos
    let listaProdutos:Produto[];
    //criando os itens da lista de produtos
    listaProdutos = [
      new Produto(1,'Quadro Baby Yoda',199),
      new Produto(2,'Mascara Darth Vader', 159),
      new Produto(3, 'LightSaber', 89),
      new Produto(4, 'Bola', 9),
    ]
    return listaProdutos
  }
}
