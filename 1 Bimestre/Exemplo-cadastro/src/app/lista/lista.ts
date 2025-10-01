import { Component } from '@angular/core';
import { DadosService } from '../dados.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  constructor(private dados: DadosService) {}

  listaNomes = this.dados.listaCadastro;

  //Remover um nome da lista que esta no arquivo dados.service
  removerNome(index: number) {
    this.dados.listaCadastro.splice(index, 1);
  }
}
