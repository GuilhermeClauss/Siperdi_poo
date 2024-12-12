import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envio-pix',
  templateUrl: './envio-pix.component.html',
  styleUrls: ['./envio-pix.component.css']
})
export class EnvioPixComponent {

  constructor(private router: Router) {}

  confirmarEnvio() {
    alert('Envio confirmado! Comprovante...');
    this.router.navigate(['/qr-code']);
  }

  voltar() {
    this.router.navigate(['/pix']);
  }
}
