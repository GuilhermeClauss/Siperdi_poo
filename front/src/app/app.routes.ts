import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TelaPixComponent } from './tela-pix/tela-pix.component';
import { CalculoCdbComponent } from './calculo-cdb/calculo-cdb.component';
import { EnvioPixComponent } from './envio-pix/envio-pix.component';
import { QRCodeComponent } from './qr-code/qr-code.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'tela-pix', component: TelaPixComponent },
  { path: 'calculo-cdb', component: CalculoCdbComponent },
  { path: 'envio-pix', component: EnvioPixComponent },
  { path: 'qr-code', component: QRCodeComponent },
];  