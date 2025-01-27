import { Collection } from "../../models/collection.interface"
import { Genre } from "../../models/genre.interface"
import { ProductionCompany, ProductionCountry } from "../../models/production.interface"
import { SpokenLanguage } from "../../models/spoken-language.interface"

export interface DetailedMovieResponse {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: Collection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieResponse {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieRecommendation extends MovieResponse {
  media_type: string
}
