import {Component, Input} from '@angular/core';
import {MovieRecommendation, MovieResponse} from "../../../../interfaces/responses/movie/movie.response.interface";
import {environment} from "../../../../environments/environment";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input('cardMovie') movie: MovieResponse | MovieRecommendation = {
    "adult": false,
    "backdrop_path": "",
    "genre_ids": [],
    "id": 0,
    "original_language": 'en',
    "original_title": 'shogun',
    "overview": '',
    "popularity": 0.0,
    "poster_path": '',
    "release_date": '2024-08-09',
    "title": 'Shogun',
    "video": false,
    "vote_average": 0.0,
    "vote_count": 0,
  };

  getMovieImageUrl() {
    return `${environment.api_image_url}${this.movie.poster_path}`
  }
}
