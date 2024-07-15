import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../../../services/movie.service';
import {mockedResponse} from "../../../../mocked.response";
import {MovieCardComponent} from "../movie-card/movie-card.component";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieCardComponent
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements AfterViewInit {
  constructor(private readonly movieService: MovieService) {
  }

  response = mockedResponse

  ngAfterViewInit(): void {
    this.movieService.getPopularMovies().subscribe((popularMovies) => {
     console.log(popularMovies);
    });
  }
}
