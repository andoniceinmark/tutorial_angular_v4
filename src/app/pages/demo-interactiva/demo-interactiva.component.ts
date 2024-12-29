import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-demo-interactiva',
  templateUrl: './demo-interactiva.component.html',
  styleUrls: ['./demo-interactiva.component.css']
})
export class DemoInteractivaComponent {
  contador = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }
}
