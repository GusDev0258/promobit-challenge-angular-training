import { MovieResponse } from "./movie.response.interface"

export interface PopularMoviesResponse {
  page: number
  results: MovieResponse[]
  total_pages: number
  total_results: number
}