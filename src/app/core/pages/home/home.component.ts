import { Component } from '@angular/core';
import { CarouselComponent } from "../../../shared/ui/carousel/carousel.component";
import { NavBarComponent } from "../../../shared/ui/nav-bar/nav-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
