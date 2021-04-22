import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {
  funcionarios =[
    {
      id: '1',
      nome: 'Maria Eduarda',
      idade: '16',
      estado: 'solteira'
    },
    {
      id: '5',
      nome: 'Quésia Fernanda',
      idade: '21',
      estado: 'solteira'
    },
    {
      id: '2',
      nome: 'Juan Pablo',
      idade: '548',
      estado: 'casado'
    },
    {
      id: '3',
      nome: 'Maicon Leandro',
      idade: '18',
      estado: 'solteiro'
    },
    {
      id: '4',
      nome: 'Lucas Haag',
      idade: '17',
      estado: 'solteiro'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
