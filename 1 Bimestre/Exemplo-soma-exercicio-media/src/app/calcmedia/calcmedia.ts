import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calcmedia',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calcmedia.html',
  styleUrl: './calcmedia.css',
})
export class Calcmedia {
  numero1: number | null = null;
  numero2: number | null = null;
  numero3: number | null = null;
  resultado: string | null = null;

  calcularMedias() {
    const n1 = Number(this.numero1) || 0;
    const n2 = Number(this.numero2) || 0;
    const n3 = Number(this.numero3) || 0;

    let mediaAritmetica = (n1 + n2 + n3) / 3;

    //(n1 * p1) + (n2 * p2) + (n3 * p3)
    //---------------------------------
    //        (p1 + p2 + p3)
    let somaValoresPeso = n1 * 3 + n2 * 2 + n3 * 5;
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresPeso / somaPesos;

    let somaMedias = mediaAritmetica + mediaPonderada;

    let mediaMedias = somaMedias / 2;

    this.resultado =
      'Média Aritmética: ' +
      mediaAritmetica +
      '<br>' +
      ' Média Ponderada: ' +
      mediaPonderada +
      '<br>' +
      ' Soma das Médias: ' +
      mediaPonderada +
      '<br>' +
      ' Média das Médias: ' +
      mediaPonderada +
      '<br>';
  }
}
