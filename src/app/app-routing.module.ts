import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContatosComponent} from './pages/contatos/contatos.component';
import {FuncionariosComponent} from './pages/funcionarios/funcionarios.component'


const routes: Routes = [
  { path: 'contatos', component:ContatosComponent},
  {path: 'funcionarios', component:FuncionariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
