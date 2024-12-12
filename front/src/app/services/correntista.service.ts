import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorrentistaService {
  private apiUrl = 'URL_DA_API_AQUI';

  constructor(private http: HttpClient) {}

  cadastrar(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/correntistas`, dados);
  }
}
