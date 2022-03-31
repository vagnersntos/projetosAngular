export class Produto{
  //criando o construtor da classe e
  //referenciando/inicializando cada umas de suas propriedades
  constructor(
      idProduto:number,
      nomeProduto:string,
      precoProduto:number,
      ){
      this.idProduto = idProduto
      this.nomeProduto = nomeProduto
      this.precoProduto = precoProduto
  }
  idProduto:number
  nomeProduto:string
  precoProduto:number
}
