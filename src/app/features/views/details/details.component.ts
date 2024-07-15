import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../../../../services/movie.service";
import {DetailedMovieResponse} from "../../../../interfaces/responses/movie/movie.response.interface";
import {CreditsResponse} from "../../../../interfaces/responses/credits/credits.response.interface";
import {catchError, forkJoin} from "rxjs";
import {environment} from "../../../../environments/environment";
import {
  RecommendationResponse
} from "../../../../interfaces/responses/recommendations/recommendations.response.interface";
import {CommonModule, DatePipe} from "@angular/common";
import {DurationPipe} from "../../../pipes/duration.pipe";
import {AveragePipe} from "../../../pipes/average.pipe";
import {CastCardComponent} from "../../components/cast-card/cast-card.component";
import {MovieCardComponent} from "../../components/movie-card/movie-card.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    DatePipe,
    DurationPipe,
    CommonModule,
    AveragePipe,
    CastCardComponent,
    MovieCardComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  constructor(private readonly _movieService: MovieService) {
  }

  @Input() id = ''
  movieDetails: DetailedMovieResponse | null = {
    "adult": false,
    "backdrop_path": "/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
    "belongs_to_collection": {
      "id": 1022790,
      "name": "Inside Out Collection",
      "poster_path": "/Apr19lGxP7gm6y2HQX0kqOXTtqC.jpg",
      "backdrop_path": "/7U2m2dMSIfHx2gWXKq78Xj1weuH.jpg"
    },
    "budget": 200000000,
    "genres": [
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 18,
        "name": "Drama"
      }
    ],
    "homepage": "https://movies.disney.com/inside-out-2",
    "id": 1022789,
    "imdb_id": "tt22022452",
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_title": "Inside Out 2",
    "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    "popularity": 7543.083,
    "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    "production_companies": [
      {
        "id": 2,
        "logo_path": "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
        "name": "Walt Disney Pictures",
        "origin_country": "US"
      },
      {
        "id": 3,
        "logo_path": "/1TjvGVDMYsj6JBxOAkUHpPEwLf7.png",
        "name": "Pixar",
        "origin_country": "US"
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "US",
        "name": "United States of America"
      }
    ],
    "release_date": "2024-06-11",
    "revenue": 1287244077,
    "runtime": 97,
    "spoken_languages": [
      {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
      }
    ],
    "status": "Released",
    "tagline": "Make room for new emotions.",
    "title": "Inside Out 2",
    "video": false,
    "vote_average": 7.689,
    "vote_count": 1696
  }

  movieCredits: CreditsResponse | null = {
    "id": 1022789,
    "cast": [
      {
        "adult": false,
        "gender": 1,
        "id": 56322,
        "known_for_department": "Acting",
        "name": "Amy Poehler",
        "original_name": "Amy Poehler",
        "popularity": 19.655,
        "profile_path": "/rwmvRonpluV6dCPiQissYrchvSD.jpg",
        "cast_id": 4,
        "character": "Joy (voice)",
        "credit_id": "631bd7450bb076007b78d023",
        "order": 0
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1903874,
        "known_for_department": "Acting",
        "name": "Maya Hawke",
        "original_name": "Maya Hawke",
        "popularity": 22.783,
        "profile_path": "/evjbbHM1bzA6Ma5Ptjwa4WkYkkj.jpg",
        "cast_id": 7,
        "character": "Anxiety (voice)",
        "credit_id": "654ce72cd4653700c4e31b8c",
        "order": 1
      },
      {
        "adult": false,
        "gender": 1,
        "id": 3020876,
        "known_for_department": "Acting",
        "name": "Kensington Tallman",
        "original_name": "Kensington Tallman",
        "popularity": 10.033,
        "profile_path": "/tBqawwg2VJq1V4mZjAOFQ7fnXNW.jpg",
        "cast_id": 511022789,
        "character": "Riley (voice)",
        "credit_id": "65eae45d5aba320186731060",
        "order": 2
      },
      {
        "adult": false,
        "gender": 1,
        "id": 51998,
        "known_for_department": "Acting",
        "name": "Liza Lapira",
        "original_name": "Liza Lapira",
        "popularity": 24.919,
        "profile_path": "/o3jvQAGWtxi5rEycslhC6CY8BWX.jpg",
        "cast_id": 11,
        "character": "Disgust (voice)",
        "credit_id": "654ce92b5a5ed001003fff7d",
        "order": 3
      },
      {
        "adult": false,
        "gender": 1,
        "id": 169200,
        "known_for_department": "Acting",
        "name": "Phyllis Smith",
        "original_name": "Phyllis Smith",
        "popularity": 18.982,
        "profile_path": "/h9w9pQbiderRWAC2mi7spjzuIGz.jpg",
        "cast_id": 8,
        "character": "Sadness (voice)",
        "credit_id": "654ce8c72866fa10928b746d",
        "order": 4
      },
      {
        "adult": false,
        "gender": 2,
        "id": 59258,
        "known_for_department": "Acting",
        "name": "Lewis Black",
        "original_name": "Lewis Black",
        "popularity": 14.424,
        "profile_path": "/1Yvp5dwnJ1UI0KtXGNhZ384wTgv.jpg",
        "cast_id": 9,
        "character": "Anger (voice)",
        "credit_id": "654ce9001ac2927b2dd002bf",
        "order": 5
      },
      {
        "adult": false,
        "gender": 2,
        "id": 25147,
        "known_for_department": "Acting",
        "name": "Tony Hale",
        "original_name": "Tony Hale",
        "popularity": 12.397,
        "profile_path": "/ar4uapp4w5wMkThZcqWUNMSTO8z.jpg",
        "cast_id": 10,
        "character": "Fear (voice)",
        "credit_id": "654ce91567b61300e5dd0954",
        "order": 6
      },
      {
        "adult": false,
        "gender": 1,
        "id": 2195140,
        "known_for_department": "Acting",
        "name": "Ayo Edebiri",
        "original_name": "Ayo Edebiri",
        "popularity": 20.68,
        "profile_path": "/V9TNVjNkAJIiCHLTzcnHLktnPf.jpg",
        "cast_id": 18,
        "character": "Envy (voice)",
        "credit_id": "65e9f9393d7454017dba07e7",
        "order": 7
      },
      {
        "adult": false,
        "gender": 1,
        "id": 586757,
        "known_for_department": "Acting",
        "name": "Adèle Exarchopoulos",
        "original_name": "Adèle Exarchopoulos",
        "popularity": 24.635,
        "profile_path": "/zlto2xvsdzLnfzoZNnS6txzNO5l.jpg",
        "cast_id": 54,
        "character": "Ennui (voice)",
        "credit_id": "663653e59590e3012cbc2db6",
        "order": 8
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1469135,
        "known_for_department": "Acting",
        "name": "Lilimar",
        "original_name": "Lilimar",
        "popularity": 5.809,
        "profile_path": "/cRerzbUsq0TiWe6z0VGtLHz4JOa.jpg",
        "cast_id": 37,
        "character": "Valentina (voice)",
        "credit_id": "65ea226224b3330163b3316d",
        "order": 9
      },
      {
        "adult": false,
        "gender": 1,
        "id": 3264370,
        "known_for_department": "Acting",
        "name": "Grace Lu",
        "original_name": "Grace Lu",
        "popularity": 1.684,
        "profile_path": "/8M0B0LlwiXyBMaCCcp4nbyXSPCy.jpg",
        "cast_id": 39,
        "character": "Grace (voice)",
        "credit_id": "65ea22866beaea01867acfb1",
        "order": 10
      },
      {
        "adult": false,
        "gender": 1,
        "id": 4578518,
        "known_for_department": "Acting",
        "name": "Sumayyah Nuriddin-Green",
        "original_name": "Sumayyah Nuriddin-Green",
        "popularity": 0.328,
        "profile_path": "/9yTDK4xUSAsC5fVY2bvgCaTnZ7L.jpg",
        "cast_id": 38,
        "character": "Bree (voice)",
        "credit_id": "65ea22837c6de30163086af1",
        "order": 11
      },
      {
        "adult": false,
        "gender": 1,
        "id": 2882,
        "known_for_department": "Acting",
        "name": "Diane Lane",
        "original_name": "Diane Lane",
        "popularity": 43.354,
        "profile_path": "/tUPAKAtstqeQrAKhkQge9jV7Owz.jpg",
        "cast_id": 13,
        "character": "Mom (voice)",
        "credit_id": "6552a2defd6fa100fee6f85e",
        "order": 12
      },
      {
        "adult": false,
        "gender": 2,
        "id": 6677,
        "known_for_department": "Acting",
        "name": "Kyle MacLachlan",
        "original_name": "Kyle MacLachlan",
        "popularity": 16.9,
        "profile_path": "/dNGPjhInyADHjiiYJAWsSUAIC7o.jpg",
        "cast_id": 14,
        "character": "Dad (voice)",
        "credit_id": "6553eaeed4fe040139815934",
        "order": 13
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1294982,
        "known_for_department": "Acting",
        "name": "Paul Walter Hauser",
        "original_name": "Paul Walter Hauser",
        "popularity": 17.015,
        "profile_path": "/hV2oiKF2xlDMXtuq3Si1TA4b6DA.jpg",
        "cast_id": 20,
        "character": "Embarrassment (voice)",
        "credit_id": "65e9f95a1dcb770163ce61d8",
        "order": 14
      },
      {
        "adult": false,
        "gender": 1,
        "id": 111513,
        "known_for_department": "Acting",
        "name": "Yvette Nicole Brown",
        "original_name": "Yvette Nicole Brown",
        "popularity": 21.924,
        "profile_path": "/ghdt5K3noAdmWV2YFLWegLRuK3T.jpg",
        "cast_id": 40,
        "character": "Coach Roberts (voice)",
        "credit_id": "65ea22d61dcb770163ce77fb",
        "order": 15
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1260038,
        "known_for_department": "Acting",
        "name": "Ron Funches",
        "original_name": "Ron Funches",
        "popularity": 7.087,
        "profile_path": "/DtULMxPvAlOKfrwISxdEffIKlk.jpg",
        "cast_id": 43,
        "character": "Bloofy (voice)",
        "credit_id": "65ea23326beaea01867ad066",
        "order": 16
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1756597,
        "known_for_department": "Acting",
        "name": "James Austin Johnson",
        "original_name": "James Austin Johnson",
        "popularity": 2.616,
        "profile_path": "/g9y0aABiKtB1FOIKmklDlgRpDof.jpg",
        "cast_id": 33,
        "character": "Pouchy (voice)",
        "credit_id": "65ea1d5424b333017cb3328b",
        "order": 17
      },
      {
        "adult": false,
        "gender": 2,
        "id": 3602293,
        "known_for_department": "Acting",
        "name": "Yong Yea",
        "original_name": "Yong Yea",
        "popularity": 0.208,
        "profile_path": "/mZX1dsTJBtiSE5LMCGAdq94UZsP.jpg",
        "cast_id": 50,
        "character": "Lance Slashblade (voice)",
        "credit_id": "65ea239d389da10180d8472c",
        "order": 18
      },
      {
        "adult": false,
        "gender": 2,
        "id": 137262,
        "known_for_department": "Acting",
        "name": "Steve Purcell",
        "original_name": "Steve Purcell",
        "popularity": 3.553,
        "profile_path": "/8wdCJVDq7v4g5N9Qkv8D87B3Xne.jpg",
        "cast_id": 65,
        "character": "Deep Dark Secret (voice)",
        "credit_id": "6652b9aaecfb5a929fa6f362",
        "order": 19
      },
      {
        "adult": false,
        "gender": 2,
        "id": 64181,
        "known_for_department": "Acting",
        "name": "Dave Goelz",
        "original_name": "Dave Goelz",
        "popularity": 7.314,
        "profile_path": "/gVwJIPP0cohKEFwgymTmzzkSX7E.jpg",
        "cast_id": 34,
        "character": "Mind Cop Frank (voice)",
        "credit_id": "65ea1dbe3d7454017dba2bfd",
        "order": 20
      },
      {
        "adult": false,
        "gender": 2,
        "id": 145446,
        "known_for_department": "Directing",
        "name": "Kirk R. Thatcher",
        "original_name": "Kirk R. Thatcher",
        "popularity": 12.244,
        "profile_path": null,
        "cast_id": 49,
        "character": "Foreman (voice)",
        "credit_id": "65ea23956beaea01867ad0c8",
        "order": 21
      },
      {
        "adult": false,
        "gender": 2,
        "id": 7908,
        "known_for_department": "Acting",
        "name": "Frank Oz",
        "original_name": "Frank Oz",
        "popularity": 16.548,
        "profile_path": "/mb2JbT8s6LIgaxj6QTph0NW1pmI.jpg",
        "cast_id": 35,
        "character": "Mind Cop Dave (voice)",
        "credit_id": "65ea1dd972c13e0185c5769b",
        "order": 22
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1226294,
        "known_for_department": "Acting",
        "name": "Paula Pell",
        "original_name": "Paula Pell",
        "popularity": 4.156,
        "profile_path": "/aQZsAcaac2zzLBMhb15O2mrSrpx.jpg",
        "cast_id": 45,
        "character": "Mom's Anger (voice)",
        "credit_id": "65ea236a5aba320186716fed",
        "order": 23
      },
      {
        "adult": false,
        "gender": 1,
        "id": 35515,
        "known_for_department": "Acting",
        "name": "June Squibb",
        "original_name": "June Squibb",
        "popularity": 8.682,
        "profile_path": "/iohsuSDPcVAFr0NKQifM7qEJDFt.jpg",
        "cast_id": 15,
        "character": "Nostalgia (voice)",
        "credit_id": "65a6c88c9ac535012d00129c",
        "order": 24
      },
      {
        "adult": false,
        "gender": 2,
        "id": 12890,
        "known_for_department": "Directing",
        "name": "Pete Docter",
        "original_name": "Pete Docter",
        "popularity": 13.002,
        "profile_path": "/xz46mHzo8apkVMxmrkMQvqakOL0.jpg",
        "cast_id": 72,
        "character": "Dad's Anger (voice)",
        "credit_id": "666dc8bf1f47987ee1a7d276",
        "order": 25
      },
      {
        "adult": false,
        "gender": 1,
        "id": 196502,
        "known_for_department": "Acting",
        "name": "Paula Poundstone",
        "original_name": "Paula Poundstone",
        "popularity": 2.631,
        "profile_path": "/jfu3LSX48WbvcJ4NXmrdI48epLJ.jpg",
        "cast_id": 46,
        "character": "Forgetter Paula (voice)",
        "credit_id": "65ea23717f4f21017bdbf939",
        "order": 26
      },
      {
        "adult": false,
        "gender": 2,
        "id": 7907,
        "known_for_department": "Acting",
        "name": "John Ratzenberger",
        "original_name": "John Ratzenberger",
        "popularity": 11.609,
        "profile_path": "/oRtDEOuIO1yDhTz5dORBdxXuLMO.jpg",
        "cast_id": 47,
        "character": "Fritz (voice)",
        "credit_id": "65ea237c389da10162d6f9e1",
        "order": 27
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1224130,
        "known_for_department": "Acting",
        "name": "Sarayu Blue",
        "original_name": "Sarayu Blue",
        "popularity": 5.927,
        "profile_path": "/zOYPWKAKwhlKTKEFei4h2DTj9tt.jpg",
        "cast_id": 41,
        "character": "Margie (voice)",
        "credit_id": "65ea232572c13e0185c57c47",
        "order": 28
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1237,
        "known_for_department": "Acting",
        "name": "Flea",
        "original_name": "Flea",
        "popularity": 14.018,
        "profile_path": "/nGQE7xf4YJeqO0a4lpFebhwI7R9.jpg",
        "cast_id": 36,
        "character": "Jake (voice)",
        "credit_id": "65ea1e253d74540164b91ab6",
        "order": 29
      },
      {
        "adult": false,
        "gender": 2,
        "id": 452205,
        "known_for_department": "Acting",
        "name": "Bobby Moynihan",
        "original_name": "Bobby Moynihan",
        "popularity": 12.19,
        "profile_path": "/gOvwNz5joi5yWJ7dAhuF8WA2aas.jpg",
        "cast_id": 44,
        "character": "Forgetter Bobby (voice)",
        "credit_id": "65ea23563d74540164b91de5",
        "order": 30
      },
      {
        "adult": false,
        "gender": 1,
        "id": 4578519,
        "known_for_department": "Acting",
        "name": "Kendall Coyne Schofield",
        "original_name": "Kendall Coyne Schofield",
        "popularity": 0.273,
        "profile_path": "/hkFryqJW9IYDlZRlDfmINbvVvKy.jpg",
        "cast_id": 48,
        "character": "Hockey Announcer (voice)",
        "credit_id": "65ea23836a2227016395a7fd",
        "order": 31
      }
    ],
    "crew": [
      {
        "adult": false,
        "gender": 2,
        "id": 182001,
        "known_for_department": "Directing",
        "name": "Kelsey Mann",
        "original_name": "Kelsey Mann",
        "popularity": 12.655,
        "profile_path": "/fK0QGrUmIPmQdyVXY3aFFafFMC0.jpg",
        "credit_id": "631bd6ad0d2f53007f5c9c41",
        "department": "Directing",
        "job": "Director"
      },
      {
        "adult": false,
        "gender": 0,
        "id": 8103,
        "known_for_department": "Production",
        "name": "Mark Nielsen",
        "original_name": "Mark Nielsen",
        "popularity": 3.714,
        "profile_path": "/bqojcGtjzHDiUWgcpjbgY1KEyOx.jpg",
        "credit_id": "631bd73351c01f007dcf1b97",
        "department": "Production",
        "job": "Producer"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 12890,
        "known_for_department": "Directing",
        "name": "Pete Docter",
        "original_name": "Pete Docter",
        "popularity": 13.002,
        "profile_path": "/xz46mHzo8apkVMxmrkMQvqakOL0.jpg",
        "credit_id": "632009e6568463007e348500",
        "department": "Production",
        "job": "Executive Producer"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 7940,
        "known_for_department": "Production",
        "name": "Jonas Rivera",
        "original_name": "Jonas Rivera",
        "popularity": 3.092,
        "profile_path": "/uzoCan3ZeK2jXt3NaZ6uilvcQTU.jpg",
        "credit_id": "65e9fa061dcb770186ce65c5",
        "department": "Production",
        "job": "Executive Producer"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 225976,
        "known_for_department": "Writing",
        "name": "Dan Scanlon",
        "original_name": "Dan Scanlon",
        "popularity": 2.898,
        "profile_path": "/sNHqtJKMd59fvEiwBRPD3zKKYQ4.jpg",
        "credit_id": "65e9fa145aba3201496f76c0",
        "department": "Production",
        "job": "Executive Producer"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1996855,
        "known_for_department": "Visual Effects",
        "name": "Dovi Anderson",
        "original_name": "Dovi Anderson",
        "popularity": 3.134,
        "profile_path": null,
        "credit_id": "65ea00c83d74540164b90ca5",
        "department": "Visual Effects",
        "job": "Animation Supervisor"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1993341,
        "known_for_department": "Visual Effects",
        "name": "Evan Bonifacio",
        "original_name": "Evan Bonifacio",
        "popularity": 2.597,
        "profile_path": null,
        "credit_id": "65ea00dd6beaea0163796b3d",
        "department": "Visual Effects",
        "job": "Animation Supervisor"
      },
      {
        "adult": false,
        "gender": 0,
        "id": 8053,
        "known_for_department": "Visual Effects",
        "name": "Michael Venturini",
        "original_name": "Michael Venturini",
        "popularity": 2.136,
        "profile_path": null,
        "credit_id": "65ea00fb7f4f21017bdbd356",
        "department": "Visual Effects",
        "job": "Animation Supervisor"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1453623,
        "known_for_department": "Writing",
        "name": "John Hoffman",
        "original_name": "John Hoffman",
        "popularity": 0.897,
        "profile_path": null,
        "credit_id": "65ea01286beaea01867aa440",
        "department": "Writing",
        "job": "Story Supervisor"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 7951,
        "known_for_department": "Art",
        "name": "Jason Deamer",
        "original_name": "Jason Deamer",
        "popularity": 1.835,
        "profile_path": null,
        "credit_id": "65ea0149d100b601854d1762",
        "department": "Art",
        "job": "Production Design"
      },
      {
        "adult": false,
        "gender": 1,
        "id": 2001825,
        "known_for_department": "Editing",
        "name": "Maurissa Horwitz",
        "original_name": "Maurissa Horwitz",
        "popularity": 1.147,
        "profile_path": "/m5A3pGcnI4URO8dMtDbjsSYwhCc.jpg",
        "credit_id": "65ea016b3d7454017dba11bd",
        "department": "Editing",
        "job": "Editor"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1994671,
        "known_for_department": "Crew",
        "name": "Sudeep Rangaswamy",
        "original_name": "Sudeep Rangaswamy",
        "popularity": 5.783,
        "profile_path": null,
        "credit_id": "65ea019072c13e0162c418df",
        "department": "Visual Effects",
        "job": "Visual Effects Supervisor"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1033687,
        "known_for_department": "Camera",
        "name": "Adam Habib",
        "original_name": "Adam Habib",
        "popularity": 1.442,
        "profile_path": null,
        "credit_id": "65ea01aa5aba320186714ac3",
        "department": "Camera",
        "job": "Director of Photography"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1998986,
        "known_for_department": "Camera",
        "name": "Jonathan Pytko",
        "original_name": "Jonathan Pytko",
        "popularity": 2.791,
        "profile_path": null,
        "credit_id": "65ea01bdaf95900184dda25f",
        "department": "Camera",
        "job": "Director of Photography"
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1565455,
        "known_for_department": "Sound",
        "name": "Andrea Datzman",
        "original_name": "Andrea Datzman",
        "popularity": 2.043,
        "profile_path": "/nUVly6mPNhHGJ2YEL0kHdI2n0Si.jpg",
        "credit_id": "65ea029d6a2227018696bf38",
        "department": "Sound",
        "job": "Original Music Composer"
      },
      {
        "adult": false,
        "gender": 0,
        "id": 1976191,
        "known_for_department": "Sound",
        "name": "Coya Elliott",
        "original_name": "Coya Elliott",
        "popularity": 0.975,
        "profile_path": null,
        "credit_id": "66228986e640d60163c39777",
        "department": "Sound",
        "job": "Supervising Sound Editor"
      },
      {
        "adult": false,
        "gender": 0,
        "id": 1445837,
        "known_for_department": "Sound",
        "name": "Stephen Urata",
        "original_name": "Stephen Urata",
        "popularity": 1.75,
        "profile_path": null,
        "credit_id": "662289948a88b20162ca7c9d",
        "department": "Sound",
        "job": "Sound Re-Recording Mixer"
      },
      {
        "adult": false,
        "gender": 1,
        "id": 2004993,
        "known_for_department": "Production",
        "name": "Kim Collins",
        "original_name": "Kim Collins",
        "popularity": 2.334,
        "profile_path": "/wZC4FZwo4RNLl89X1HlqXWGmn3P.jpg",
        "credit_id": "6652b7f0a5090f330207bd8c",
        "department": "Production",
        "job": "Associate Producer"
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1457025,
        "known_for_department": "Writing",
        "name": "Meg LeFauve",
        "original_name": "Meg LeFauve",
        "popularity": 10.291,
        "profile_path": "/3xv8tzlBZoGDqEoZqktqu2LRLUe.jpg",
        "credit_id": "6652b8008fed3c505353c24a",
        "department": "Writing",
        "job": "Screenplay"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1888448,
        "known_for_department": "Writing",
        "name": "Dave Holstein",
        "original_name": "Dave Holstein",
        "popularity": 2.694,
        "profile_path": "/cahOZfIPtjdcDNZu2qiXZs6zQtE.jpg",
        "credit_id": "6652b807b4b81f8985530fb4",
        "department": "Writing",
        "job": "Screenplay"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 182001,
        "known_for_department": "Directing",
        "name": "Kelsey Mann",
        "original_name": "Kelsey Mann",
        "popularity": 12.655,
        "profile_path": "/fK0QGrUmIPmQdyVXY3aFFafFMC0.jpg",
        "credit_id": "6652b810dc0418e655c61e20",
        "department": "Writing",
        "job": "Story"
      },
      {
        "adult": false,
        "gender": 1,
        "id": 1457025,
        "known_for_department": "Writing",
        "name": "Meg LeFauve",
        "original_name": "Meg LeFauve",
        "popularity": 10.291,
        "profile_path": "/3xv8tzlBZoGDqEoZqktqu2LRLUe.jpg",
        "credit_id": "6652b817d55ffbc98600a2c0",
        "department": "Writing",
        "job": "Story"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 57673,
        "known_for_department": "Production",
        "name": "Kevin Reher",
        "original_name": "Kevin Reher",
        "popularity": 1.696,
        "profile_path": null,
        "credit_id": "6652b847e1d94188a934c86b",
        "department": "Production",
        "job": "Casting"
      },
      {
        "adult": false,
        "gender": 1,
        "id": 963497,
        "known_for_department": "Production",
        "name": "Natalie Lyon",
        "original_name": "Natalie Lyon",
        "popularity": 4.5,
        "profile_path": null,
        "credit_id": "6652b854a39cf9b9b7c62be4",
        "department": "Production",
        "job": "Casting"
      },
      {
        "adult": false,
        "gender": 1,
        "id": 2499932,
        "known_for_department": "Production",
        "name": "Kate Hansen-Birnbaum",
        "original_name": "Kate Hansen-Birnbaum",
        "popularity": 0.127,
        "profile_path": null,
        "credit_id": "6652b85b4a4bce85a7530e0b",
        "department": "Production",
        "job": "Casting"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 15347,
        "known_for_department": "Sound",
        "name": "Michael Giacchino",
        "original_name": "Michael Giacchino",
        "popularity": 5.088,
        "profile_path": "/1zKiTAfMpc3I8oxdLahx3k6KOOV.jpg",
        "credit_id": "6652b89693220d5188530e49",
        "department": "Sound",
        "job": "Music"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1236458,
        "known_for_department": "Art",
        "name": "Ronnie del Carmen",
        "original_name": "Ronnie del Carmen",
        "popularity": 4.047,
        "profile_path": "/lPCmkQK76DOgkmcRjg9394QPyAu.jpg",
        "credit_id": "6652bac59d155e059653c1df",
        "department": "Crew",
        "job": "Additional Writing"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1512665,
        "known_for_department": "Sound",
        "name": "Heikki Kossi",
        "original_name": "Heikki Kossi",
        "popularity": 2.613,
        "profile_path": "/6VipnMFz9whg3WKRGld7KJDGTlo.jpg",
        "credit_id": "6671e7771623d573d4557955",
        "department": "Sound",
        "job": "Foley Artist"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1477958,
        "known_for_department": "Acting",
        "name": "Matt Lowe",
        "original_name": "Matt Lowe",
        "popularity": 3.046,
        "profile_path": "/u137BVOu2worxWBIWNkwW35b60X.jpg",
        "credit_id": "667357ec4a098e7f5c55ac1b",
        "department": "Sound",
        "job": "ADR & Dubbing"
      },
      {
        "adult": false,
        "gender": 1,
        "id": 111466,
        "known_for_department": "Acting",
        "name": "Mona Marshall",
        "original_name": "Mona Marshall",
        "popularity": 7.71,
        "profile_path": "/A2RCAt0Xmm3jLBKZogQAJX6eD9n.jpg",
        "credit_id": "667357f7ee0a7177c8644dcc",
        "department": "Sound",
        "job": "ADR & Dubbing"
      },
      {
        "adult": false,
        "gender": 1,
        "id": 3556107,
        "known_for_department": "Acting",
        "name": "Libi Rose",
        "original_name": "Libi Rose",
        "popularity": 0.007,
        "profile_path": null,
        "credit_id": "66735805d6eb93c0f3ec53b8",
        "department": "Sound",
        "job": "ADR & Dubbing"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 157067,
        "known_for_department": "Acting",
        "name": "Matthew Yang King",
        "original_name": "Matthew Yang King",
        "popularity": 10.926,
        "profile_path": "/jcLJIw0s2uP4PSnH5E8oM3pUyiV.jpg",
        "credit_id": "6673582692e2561424cee4c2",
        "department": "Sound",
        "job": "ADR & Dubbing"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 59784,
        "known_for_department": "Acting",
        "name": "Carlos Alazraqui",
        "original_name": "Carlos Alazraqui",
        "popularity": 45.131,
        "profile_path": "/d2hufnjlfsZiY7N9NLZ6b7FE1IZ.jpg",
        "credit_id": "6673582f57975574a455ac94",
        "department": "Sound",
        "job": "ADR & Dubbing"
      },
      {
        "adult": false,
        "gender": 1,
        "id": 24358,
        "known_for_department": "Acting",
        "name": "Lori Alan",
        "original_name": "Lori Alan",
        "popularity": 4.713,
        "profile_path": "/pdqefVlTbIpNObYdIlyWQGYLEBd.jpg",
        "credit_id": "6673589147fcee8054ec53d4",
        "department": "Sound",
        "job": "ADR & Dubbing"
      },
      {
        "adult": false,
        "gender": 2,
        "id": 7763,
        "known_for_department": "Sound",
        "name": "Ren Klyce",
        "original_name": "Ren Klyce",
        "popularity": 3.421,
        "profile_path": "/tMDHEVa05pe3od1NMpfplPVPnxD.jpg",
        "credit_id": "6691b8d1b71c4fbbeb023821",
        "department": "Sound",
        "job": "Sound Designer"
      }
    ]
  }
  movieRecommendations: RecommendationResponse | null = {
    "page": 1,
    "results": [
      {
        "backdrop_path": "/6XjMwQTvnICBz6TguiDKkDVHvgS.jpg",
        "id": 762441,
        "title": "A Quiet Place: Day One",
        "original_title": "A Quiet Place: Day One",
        "overview": "As New York City is invaded by alien creatures who hunt by sound, a woman named Sam fights to survive.",
        "poster_path": "/yrpPYKijwdMHyTGIOd1iK1h0Xno.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          27,
          878,
          53
        ],
        "popularity": 727.845,
        "release_date": "2024-06-26",
        "video": false,
        "vote_average": 6.907,
        "vote_count": 391
      },
      {
        "backdrop_path": "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
        "id": 653346,
        "title": "Kingdom of the Planet of the Apes",
        "original_title": "Kingdom of the Planet of the Apes",
        "overview": "Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all he's known about the past and to make choices that will define a future for apes and humans alike.",
        "poster_path": "/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          878,
          12,
          28
        ],
        "popularity": 2341.681,
        "release_date": "2024-05-08",
        "video": false,
        "vote_average": 7.066,
        "vote_count": 1708
      },
      {
        "backdrop_path": "/bVigVS3LVotEK4GsBlGOagkjPEc.jpg",
        "id": 1008409,
        "title": "The Bikeriders",
        "original_title": "The Bikeriders",
        "overview": "After a chance encounter, headstrong Kathy is drawn to Benny, member of Midwestern motorcycle club the Vandals. As the club transforms into a dangerous underworld of violence, Benny must choose between Kathy and his loyalty to the club.",
        "poster_path": "/qTb6sSRt8Pw96JTan8ezU2xO0FU.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          80,
          18
        ],
        "popularity": 330.062,
        "release_date": "2024-06-19",
        "video": false,
        "vote_average": 7.167,
        "vote_count": 246
      },
      {
        "backdrop_path": "/gRApXuxWmO2forYTuTmcz5RaNUV.jpg",
        "id": 573435,
        "title": "Bad Boys: Ride or Die",
        "original_title": "Bad Boys: Ride or Die",
        "overview": "After their late former Captain is framed, Lowrey and Burnett try to clear his name, only to end up on the run themselves.",
        "poster_path": "/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          28,
          80,
          53,
          35
        ],
        "popularity": 1328.588,
        "release_date": "2024-06-05",
        "video": false,
        "vote_average": 7.048,
        "vote_count": 547
      },
      {
        "backdrop_path": "/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg",
        "id": 150540,
        "title": "Inside Out",
        "original_title": "Inside Out",
        "overview": "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
        "poster_path": "/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          16,
          10751,
          12,
          18,
          35
        ],
        "popularity": 641.822,
        "release_date": "2015-06-17",
        "video": false,
        "vote_average": 7.916,
        "vote_count": 21181
      },
      {
        "backdrop_path": "/fDmci71SMkfZM8RnCuXJVDPaSdE.jpg",
        "id": 519182,
        "title": "Despicable Me 4",
        "original_title": "Despicable Me 4",
        "overview": "Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
        "poster_path": "/3w84hCFJATpiCO5g8hpdWVPBbmq.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          16,
          10751,
          35,
          28
        ],
        "popularity": 5868.811,
        "release_date": "2024-06-20",
        "video": false,
        "vote_average": 7.547,
        "vote_count": 232
      },
      {
        "backdrop_path": "/fzkLKtZCkYSDzxoqntE5KgIqvzk.jpg",
        "id": 1084736,
        "title": "The Count of Monte-Cristo",
        "original_title": "Le Comte de Monte-Cristo",
        "overview": "Edmond Dantes becomes the target of a sinister plot and is arrested on his wedding day for a crime he did not commit. After 14 years in the island prison of Château d’If, he manages a daring escape. Now rich beyond his dreams, he assumes the identity of the Count of Monte-Cristo and exacts his revenge on the three men who betrayed him.",
        "poster_path": "/aHRUsFln97FlIdsvYKFT3z5ubYE.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "fr",
        "genre_ids": [
          12,
          36,
          28,
          18,
          10749,
          53
        ],
        "popularity": 68.345,
        "release_date": "2024-06-28",
        "video": false,
        "vote_average": 8.495,
        "vote_count": 213
      },
      {
        "backdrop_path": "/wNAhuOZ3Zf84jCIlrcI6JhgmY5q.jpg",
        "id": 786892,
        "title": "Furiosa: A Mad Max Saga",
        "original_title": "Furiosa: A Mad Max Saga",
        "overview": "As the world fell, young Furiosa is snatched from the Green Place of Many Mothers and falls into the hands of a great Biker Horde led by the Warlord Dementus. Sweeping through the Wasteland they come across the Citadel presided over by The Immortan Joe. While the two Tyrants war for dominance, Furiosa must survive many trials as she puts together the means to find her way home.",
        "poster_path": "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          28,
          12,
          878
        ],
        "popularity": 2300.198,
        "release_date": "2024-05-22",
        "video": false,
        "vote_average": 7.661,
        "vote_count": 2067
      },
      {
        "backdrop_path": "/iTWrsOVsUqcwYSxrpINNs3hG2nC.jpg",
        "id": 1001311,
        "title": "Under Paris",
        "original_title": "Sous la Seine",
        "overview": "In order to save Paris from an international bloodbath, a grieving scientist is forced to face her tragic past when a giant shark appears in the Seine.",
        "poster_path": "/qZPLK5ktRKa3CL4sKRZtj8UlPYc.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "fr",
        "genre_ids": [
          53,
          27,
          28,
          9648
        ],
        "popularity": 848.556,
        "release_date": "2024-06-04",
        "video": false,
        "vote_average": 6.095,
        "vote_count": 889
      },
      {
        "backdrop_path": "/ngLxW9WqQAkTCBTcjOSt2Pnz5qZ.jpg",
        "id": 987686,
        "title": "A Family Affair",
        "original_title": "A Family Affair",
        "overview": "The only thing worse than being the assistant to a high-maintenance movie star who doesn't take you seriously? Finding out he's smitten with your mom.",
        "poster_path": "/l0CaVyqnTsWwNd4hWsrLNEk1Wjd.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          10749,
          35
        ],
        "popularity": 369.12,
        "release_date": "2024-06-27",
        "video": false,
        "vote_average": 6.093,
        "vote_count": 302
      },
      {
        "backdrop_path": "/nxxCPRGTzxUH8SFMrIsvMmdxHti.jpg",
        "id": 639720,
        "title": "IF",
        "original_title": "IF",
        "overview": "A young girl who goes through a difficult experience begins to see everyone's imaginary friends who have been left behind as their real-life friends have grown up.",
        "poster_path": "/xbKFv4KF3sVYuWKllLlwWDmuZP7.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          35,
          14,
          10751
        ],
        "popularity": 459.287,
        "release_date": "2024-05-08",
        "video": false,
        "vote_average": 7.405,
        "vote_count": 619
      },
      {
        "backdrop_path": "/a4IWRYNMNMszIkRbEIiNsRg6cvt.jpg",
        "id": 929590,
        "title": "Civil War",
        "original_title": "Civil War",
        "overview": "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
        "poster_path": "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          10752,
          28,
          18
        ],
        "popularity": 747.632,
        "release_date": "2024-04-10",
        "video": false,
        "vote_average": 6.993,
        "vote_count": 1867
      },
      {
        "backdrop_path": "/d4P97PFMG5UKyZyvRn5kIiNMBxn.jpg",
        "id": 974635,
        "title": "Hit Man",
        "original_title": "Hit Man",
        "overview": "A mild-mannered professor moonlighting as a fake hit man in police stings ignites a chain reaction of trouble when he falls for a potential client.",
        "poster_path": "/1126gjlBf4hTm9Sgf0ox3LGVEBt.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          80,
          35,
          10749
        ],
        "popularity": 186.543,
        "release_date": "2024-05-16",
        "video": false,
        "vote_average": 7,
        "vote_count": 512
      },
      {
        "backdrop_path": "/v1oDFDwa0wMELupPgyOEWGvNCRj.jpg",
        "id": 1152014,
        "title": "A Little Something Extra",
        "original_title": "Un p’tit truc en plus",
        "overview": "To escape the police, a father and his son are forced to find refuge in a summer camp for young adults with mental disabilities, taking on the role of an educator and a boarder. The beginning of troubles and a wonderful human experience that will change them forever.",
        "poster_path": "/aBaJeCMgLJac6bHFCdHWcY8sFOc.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "fr",
        "genre_ids": [
          35
        ],
        "popularity": 19.12,
        "release_date": "2024-04-18",
        "video": false,
        "vote_average": 7.757,
        "vote_count": 239
      },
      {
        "backdrop_path": "/wXx72bbhhnfORmlSNMWR28fPd8b.jpg",
        "id": 1086747,
        "title": "The Watchers",
        "original_title": "The Watchers",
        "overview": "A young artist gets stranded in an extensive, immaculate forest in western Ireland, where, after finding shelter, she becomes trapped alongside three strangers, stalked by mysterious creatures each night.",
        "poster_path": "/vZVEUPychdvZLrTNwWErr9xZFmu.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          14,
          9648,
          53,
          27
        ],
        "popularity": 540.82,
        "release_date": "2024-06-06",
        "video": false,
        "vote_average": 6.552,
        "vote_count": 459
      },
      {
        "backdrop_path": "/aATi2PtaOQCVAquCym6OU0Z4FjY.jpg",
        "id": 704673,
        "title": "Trigger Warning",
        "original_title": "Trigger Warning",
        "overview": "A Special Forces commando uncovers a dangerous conspiracy when she returns to her hometown looking for answers into her beloved father's death.",
        "poster_path": "/lJN24nn28s5afC1UnLPYRgYOp1K.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          28,
          80,
          53
        ],
        "popularity": 696.996,
        "release_date": "2024-06-20",
        "video": false,
        "vote_average": 5.9,
        "vote_count": 306
      },
      {
        "backdrop_path": "/vblTCXOWUQGSc837vgbhDRi4HSc.jpg",
        "id": 955555,
        "title": "The Roundup: No Way Out",
        "original_title": "범죄도시 3",
        "overview": "Detective Ma Seok-do changes his affiliation from the Geumcheon Police Station to the Metropolitan Investigation Team, in order to eradicate Japanese gangsters who enter Korea to commit heinous crimes.",
        "poster_path": "/lW6IHrtaATxDKYVYoQGU5sh0OVm.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "ko",
        "genre_ids": [
          28,
          80,
          35,
          53
        ],
        "popularity": 536.755,
        "release_date": "2023-05-31",
        "video": false,
        "vote_average": 7.268,
        "vote_count": 362
      },
      {
        "backdrop_path": "/pEm2iEVFVqbhiNwx7UAzezJ1Et4.jpg",
        "id": 1010600,
        "title": "The Strangers: Chapter 1",
        "original_title": "The Strangers: Chapter 1",
        "overview": "After their car breaks down in an eerie small town, a young couple are forced to spend the night in a remote cabin. Panic ensues as they are terrorized by three masked strangers who strike with no mercy and seemingly no motives.",
        "poster_path": "/cdFZoQDxLRRWXLB3kxCnc674dBF.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          27,
          53
        ],
        "popularity": 122.791,
        "release_date": "2024-05-15",
        "video": false,
        "vote_average": 5.771,
        "vote_count": 175
      },
      {
        "backdrop_path": "/H5HjE7Xb9N09rbWn1zBfxgI8uz.jpg",
        "id": 746036,
        "title": "The Fall Guy",
        "original_title": "The Fall Guy",
        "overview": "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
        "poster_path": "/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          28,
          35
        ],
        "popularity": 496.603,
        "release_date": "2024-04-24",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 1535
      },
      {
        "backdrop_path": "/Akv9GlCCMrzcDkVz4ad8MdLl9DK.jpg",
        "id": 748783,
        "title": "The Garfield Movie",
        "original_title": "The Garfield Movie",
        "overview": "Garfield, the world-famous, Monday-hating, lasagna-loving indoor cat, is about to have a wild outdoor adventure! After an unexpected reunion with his long-lost father – scruffy street cat Vic – Garfield and his canine friend Odie are forced from their perfectly pampered life into joining Vic in a hilarious, high-stakes heist.",
        "poster_path": "/xYduFGuch9OwbCOEUiamml18ZoB.jpg",
        "media_type": "movie",
        "adult": false,
        "original_language": "en",
        "genre_ids": [
          16,
          35,
          10751,
          12
        ],
        "popularity": 2174.906,
        "release_date": "2024-04-30",
        "video": false,
        "vote_average": 7.081,
        "vote_count": 352
      }
    ],
    "total_pages": 2,
    "total_results": 40
  }
  error: any


  ngOnInit() {
    forkJoin({
      details: this._movieService.getMovieById(this.id).pipe(catchError(err => {
        this.error = err;
        return [];
      })),
      credits: this._movieService.getCreditsByMovieId(this.id).pipe(catchError(err => {
        this.error = err;
        return [];
      })),
      recommendations: this._movieService.getRecommendationsByMovieId(this.id).pipe(catchError(err => {
        this.error = err;
        return [];
      })),
    }).subscribe({
      next: ({details, credits, recommendations}) => {
        this.movieDetails = details;
        this.movieCredits = credits;
        this.movieRecommendations = recommendations;
      },
      error: err => {
        this.error = err;
        console.error("Error fecthing data", err);
        }
      })
    }

  getImagePosterUrl() {
    return `${environment.api_image_url}${this.movieDetails?.poster_path}`
  }
}
