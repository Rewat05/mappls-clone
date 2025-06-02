

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-panel',
  standalone: true, // ✅ Required for Angular standalone components
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule here
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
// export class LeftPanelComponent {
//   searchQuery: string = '';

//   onCardClick(action: string): void {
//     console.log('Clicked:', action);
//     // You can expand this logic later
//   }
// }

export class LeftPanelComponent {
  searchQuery: string = '';
  isVisible: boolean = true;

  togglePanel(): void {
    this.isVisible = !this.isVisible;
  }

  onCardClick(action: string): void {
    console.log('Clicked:', action);
  }
}
