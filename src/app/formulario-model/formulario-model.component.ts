import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-model',
  templateUrl: './formulario-model.component.html',
  styleUrls: ['./formulario-model.component.css']
})
export class FormularioModelComponent implements OnInit {
  //criando as propriedades para controlar o formulário
  dadosForm:any
  email:any
  senha:any

  ngOnInit(): void {
    this.dadosForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9.]+@[a-z0-9]+.[a-z0-9.]+')
      ])),
      senha: new FormControl('', Validators.compose([
        this.validacaoSenha,
        Validators.required
      ]))
    });
  }
  //criar função para validar tamanho da senha
  validacaoSenha(valorSenha:any){
    if(valorSenha.value.length < 5){
      return {senha: true}
    }
    return null
  }
  //criar uma função para exibir o resultado do "controle" do form
  exibirDados(dados:any){
    this.email = dados.email
  }
}
