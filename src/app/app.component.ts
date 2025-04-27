import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // already added
import { FooterComponent } from './footer/footer.component'; // NEW import for Footer
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BookingsComponent } from './bookings/bookings.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, HomeComponent,ContactusComponent,PackagesComponent, LocationsComponent, BookingsComponent, RouterLink], // <-- Add FooterComponent here
})
export class AppComponent {
  title = 'mst';
}
