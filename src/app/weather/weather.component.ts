import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-weather',
  standalone: true,
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  imports: [CommonModule, FormsModule]
})
export class WeatherComponent {
  city: string = '';
  weatherData: any = null;
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) { }

  getWeather(): void {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe(
        (data) => {
          this.weatherData = data;
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = error;  // Improved error handling
          this.weatherData = null;
        }
      );
    } else {
      this.errorMessage = 'Please enter a city name.';
      this.weatherData = null;
    }
  }
}
