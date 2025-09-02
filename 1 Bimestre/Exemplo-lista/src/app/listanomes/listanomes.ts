import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listanomes',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './listanomes.html',
  styleUrl: './listanomes.css',
})
export class Listanomes {
  //Nome que será digitado no input
  novoNome: string = '';

  //Lista de nomes
  listaNomes: string[] = [];

  //Função para adicionar nomes na lista
  adicionarNome() {
    //Verificar se novoNome não esta vazio
    if (this.novoNome.trim()) {
      //Adiciona o nome na lista
      this.listaNomes.push(this.novoNome);
      this.novoNome = '';
    }
  }

  //REmover um nome da lista
  removerNome(index: number) {
    this.listaNomes.splice(index, 1);
  }
}
