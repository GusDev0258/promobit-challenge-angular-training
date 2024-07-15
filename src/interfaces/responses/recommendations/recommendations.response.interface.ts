import {MovieRecommendation, MovieResponse} from "../movie/movie.response.interface";

export interface RecommendationResponse {
  page: number;
  results: MovieRecommendation[];
  total_pages: number;
  total_results: number;
}
