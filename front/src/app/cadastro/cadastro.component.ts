import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CorrentistaService } from '../correntista.service';
import { Correntista } from '../../model/correntista';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  public dadosCadastrais = new Correntista();
  public titulo: string = 'Cadastro de Clientes';
  public cpf = '00000000000';

  constructor(
    private service: CorrentistaService,
    private router: Router
  ) {}

  clickSalvar(): void {
    this.service.cadastrar(this.dadosCadastrais).subscribe ( resposta => {
      alert("Cadastrado com sucesso!");
    })
  }

  voltarParaLogin(): void {
    this.router.navigate(['/']);
  }

}