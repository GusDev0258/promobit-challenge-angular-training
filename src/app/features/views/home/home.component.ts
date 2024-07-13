import { Component } from '@angular/core';
import { CategorySelectorComponent } from "../../components/category-selector/category-selector.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategorySelectorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = process.env['TITLE'] 
}
