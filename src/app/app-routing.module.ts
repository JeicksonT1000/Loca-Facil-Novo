import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { SolicitacaoComponent } from './components/solicitacao/solicitacao.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadastroComponent},

  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'solicitacao', component: SolicitacaoComponent },
      { path: 'clientManager', component: ClienteListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
