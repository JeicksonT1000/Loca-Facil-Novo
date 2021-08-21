import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { SolicitacaoComponent } from './components/solicitacao/solicitacao.component';

const routes: Routes = [
  {
    path: '', component: NavComponent, children: [
      { path: 'solicitacao', component: SolicitacaoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
