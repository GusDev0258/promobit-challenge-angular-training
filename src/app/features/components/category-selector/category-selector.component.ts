import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-selector.component.html',
  styleUrl: './category-selector.component.scss'
})
export class CategorySelectorComponent {
  genresList = [
    "Ação",
    "Aventura",
    "Animação",
    "Comédia",
    "Crime",
    "Documentário",
    "Drama",
    "Família",
    "Fantasia",
    "História",
    "Terror",
    "Música",
    "Mistério",
    "Romance",
    "Ficção científica",
    "Cinema TV",
    "Thriller",
    "Guerra",
    "Faroeste"
  ]
}
