import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { PopularMoviesResponse } from "../interfaces/popular-movies.response.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private readonly _http: HttpClient) {}

  getPopularMovies(): Observable<PopularMoviesResponse> {
    return this._http.get<PopularMoviesResponse>(environment.api_url + 'popular?language=en-US&page=1', {
      headers: {
        'accept': 'application/json',
        'Authorization': environment.api_token
      }
    })
  }
}
