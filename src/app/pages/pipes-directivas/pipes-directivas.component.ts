import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-pipes-directivas',
  templateUrl: './pipes-directivas.component.html',
  styleUrls: ['./pipes-directivas.component.css'],
  imports: [CommonModule] // <-- Importamos CommonModule
})
export class PipesDirectivasComponent {
  fecha = new Date(); // <-- Declaramos la variable
}
