import {HttpClient} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {environment} from "../environments/environment";
import {PopularMoviesResponse} from "../interfaces/responses/movie/popular-movies.response.interface";
import {Observable} from "rxjs";
import {DetailedMovieResponse} from "../interfaces/responses/movie/movie.response.interface";
import {CreditsResponse} from "../interfaces/responses/credits/credits.response.interface";
import {RecommendationResponse} from "../interfaces/responses/recommendations/recommendations.response.interface";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private readonly _http: HttpClient) {
  }

  getPopularMovies(): Observable<PopularMoviesResponse> {
    return this._http.get<PopularMoviesResponse>(environment.api_url + 'popular?language=en-US&page=1', {
      headers: {
        'accept': 'application/json',
        'Authorization': environment.api_token
      }
    })
  }

  getMovieById(id: string) : Observable<DetailedMovieResponse>{
    return this._http.get<DetailedMovieResponse>(environment.api_url + `${id}?language=en-US`, {
      headers: {
        'accept': 'application/json',
        'Authorization': environment.api_token
      }
    })
  }

  getCreditsByMovieId(id: string): Observable<CreditsResponse> {
    return this._http.get<CreditsResponse>(environment.api_url + `${id}/credits?language=en-US`, {
      headers: {
        'accept': 'application/json',
        'Authorization': environment.api_token
      }
    })
  }

  getRecommendationsByMovieId(id: string): Observable<RecommendationResponse> {
    return this._http.get<RecommendationResponse>(environment.api_url + `${id}/recommendations?language=en-US`, {
      headers: {
        'accept': 'application/json',
        'Authorization': environment.api_token
      }
    })
  }
}
