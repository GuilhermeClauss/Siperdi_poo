import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent {
  public saldoFicticio: string = ''; 
  public investimentoFicticio: string = ''; 
  public creditoFicticio: string = ''; 

  constructor(private router: Router) {}

  public mostrarSaldo() {
    this.saldoFicticio = 'R$ 5.000,00'; 
    this.investimentoFicticio = ''; 
    this.creditoFicticio = '';
  }

  public mostrarInvestimentos() {
    this.investimentoFicticio = 'R$ 20.000,00'; 
    this.saldoFicticio = '';
    this.creditoFicticio = '';
  }

  public mostrarCredito() {
    this.creditoFicticio = 'R$ 10.000,00'; 
    this.saldoFicticio = ''; 
    this.investimentoFicticio = '';
  }
}
