import { Component } from '@angular/core';
import { Funcionarios } from './funcionarios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'academia';
  funcionario1 = new Funcionarios(1001, "Lucas", 4, 5, 8);
}
