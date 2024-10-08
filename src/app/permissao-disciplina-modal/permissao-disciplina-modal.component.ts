import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa o CommonModule

@Component({
  selector: 'app-permissao-disciplina-modal',
  templateUrl: './permissao-disciplina-modal.component.html',
  styleUrls: ['./permissao-disciplina-modal.component.css'],
  standalone: true,
  imports: [CommonModule]  // Adiciona o CommonModule ao imports
})
export class PermissaoDisciplinaModalComponent {
  isOpen = false;  // Inicialmente, o modal está fechado
disciplina: any;

  abrirModal() {
    this.isOpen = true;  // Abre o modal quando chamado
  }

  fecharModal() {
    this.isOpen = false;  // Fecha o modal quando solicitado
  }

  concederPermissao() {
    alert('Permissão concedida!');
    this.fecharModal();  // Fecha o modal após conceder a permissão
  }
}
