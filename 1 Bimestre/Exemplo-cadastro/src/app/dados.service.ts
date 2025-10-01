import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DadosService {
  public listaCadastro: string[] = []; // variável pública
}
