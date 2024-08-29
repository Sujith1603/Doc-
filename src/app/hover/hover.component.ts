import { Component } from '@angular/core';

@Component({
  selector: 'app-hover',
  templateUrl: './hover.component.html',
  styleUrl: './hover.component.css'
})
export class HoverComponent {
  isHovered: boolean = false;

  onHover(): void {
    this.isHovered = true;
  }

  onHoverOut(): void {
    this.isHovered = false;
  }

}
