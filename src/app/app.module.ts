import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component'


@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent,
    FuncionariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
