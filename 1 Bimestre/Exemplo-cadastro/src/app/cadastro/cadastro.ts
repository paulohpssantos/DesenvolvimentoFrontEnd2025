import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  constructor(private router: Router, private dados: DadosService) {}

  novoNome: string = '';

  adicionarNome() {
    //Verificar se novoNome não esta vazio
    if (this.novoNome.trim()) {
      //Adiciona o nome na lista que está no arquivo dados.service
      this.dados.listaCadastro.push(this.novoNome);
      this.novoNome = '';
    }
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}
