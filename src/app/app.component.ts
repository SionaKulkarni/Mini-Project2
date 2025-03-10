import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';



@Component({
  selector: 'app-root',
  imports: [WeatherComponent],
  standalone: true,
  template: `
    <h1>Welcome to Weather App</h1>
    <app-weather></app-weather> <!-- Use WeatherComponent -->
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'weather-app';
}
