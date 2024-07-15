import {Component, Input} from '@angular/core';
import {CastMember} from "../../../../interfaces/models/cast.interface";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-cast-card',
  standalone: true,
  imports: [],
  templateUrl: './cast-card.component.html',
  styleUrl: './cast-card.component.scss'
})
export class CastCardComponent {
  @Input({required: true}) castMember: CastMember = {
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
  };

  getCastMemberImageUrl() {
    return `${environment.api_image_url}${this.castMember?.profile_path}`
  }
}
