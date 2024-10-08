import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PermissaoDisciplinaModalComponent } from './permissao-disciplina-modal/permissao-disciplina-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PermissaoDisciplinaModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(PermissaoDisciplinaModalComponent) modal!: PermissaoDisciplinaModalComponent;
  isOpen!: boolean;

  abrirModal() {
    this.modal.abrirModal();
    console.log('Abrindo modal...');
    this.isOpen = true;
  }
fecharModal() {
  this.isOpen = false;
}
  title = 'permissao-disciplina';
disciplina: any;
}
