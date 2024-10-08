import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PermissaoDisciplinaModalComponent } from './permissao-disciplina-modal/permissao-disciplina-modal.component'; // Importe o componente modal

@NgModule({
  imports: [
    BrowserModule,
    AppComponent, // Importar o AppComponent standalone
    PermissaoDisciplinaModalComponent // Importar o componente modal standalone
  ],
  bootstrap: [] // O AppComponent ainda será o ponto de entrada da aplicação
})
export class AppModule {}
