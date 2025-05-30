import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarFormComponent } from './car-form/car-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CarFormComponent],
  template: `
    <div class="app-container">
      <h1>Car Registration System</h1>
      <app-car-form></app-car-form>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 2rem;
    }
    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 2rem;
    }
  `]
})
export class AppComponent {
  title = 'formdriven';
}
