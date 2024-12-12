import { Component } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QRCodeComponent {

  constructor(private router: Router) {}  

  voltar() {
    this.router.navigate(['/tela-inicial']);  
  }
}
