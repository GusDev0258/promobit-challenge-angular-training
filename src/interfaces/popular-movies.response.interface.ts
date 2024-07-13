import { MovieResponse } from "./movie.response.interface"

export interface Root {
  page: number
  results: MovieResponse[]
  total_pages: number
  total_results: number
}