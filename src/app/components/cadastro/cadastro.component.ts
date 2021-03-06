import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateUser } from 'src/app/models/createUser';
import { CreateuserService } from 'src/app/services/createuser.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cliente: CreateUser = {
    iduser: '',
    name: '',
    email: '',
    password: ''
  }

  hide = true;

  nome = new FormControl(null, Validators.minLength(3));
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(8));


  constructor(
    private service: CreateuserService,
    private  toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.nome.valid && this.email.valid && this.senha.valid
  }

  create(): void {
    this.service.create(this.cliente).subscribe(() => {
      this.toast.success('Cadastro realizado com sucesso', 'Cadastro');
      this.router.navigate(['login']);
    }, ex => {
      this.toast.error('Erro ao cadastrar, verifique os dados. Tente novamente.', 'Falha ao realizar Cadastro!');
    })
  }
}
