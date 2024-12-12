import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-pix',
  templateUrl: './tela-pix.component.html',
  styleUrls: ['./tela-pix.component.css']
})
export class TelaPixComponent {

  constructor(private router: Router) {}

  irParaEnvioPix() {
    this.router.navigate(['/envio-pix']);
  }

  irParaReceberPix() {
    alert('Funcionalidade de receber Pix ainda não implementada!');
  }
}
