import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Ajudai';
  mensagem: string;
  num: number;
  num2: number;
  resul: number;
  botao: boolean = true;
  resultados: number[] = [];

  evento() {

    this.resul = this.num * this.num2;
    this.resultados.push(this.resul);
    this.mensagem = this.resul.toString();
    this.botao = false;

  }

}
