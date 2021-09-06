import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  hide = true;

  nome = new FormControl(null, Validators.minLength(3));
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(8));


  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.nome.valid && this.email.valid && this.senha.valid
  }
}
