import { Component } from '@angular/core';
import { CategorySelectorComponent } from "../../components/category-selector/category-selector.component";
import { MovieListComponent } from "../../components/movie-list/movie-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategorySelectorComponent, MovieListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
