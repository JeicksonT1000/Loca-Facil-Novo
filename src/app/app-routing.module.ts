import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { NavComponent } from './components/nav/nav.component';
import { SolicitacaoComponent } from './components/solicitacao/solicitacao.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
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
