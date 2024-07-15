import {CastMember} from "../../models/cast.interface";
import {Crew} from "../../models/crew.interface";

export interface CreditsResponse {
  id: number
  cast: CastMember[]
  crew: Crew[]
}


