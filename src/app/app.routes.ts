import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component'; 
import { HomeComponent } from './home/home.component'; 

export const routes: Routes = [
    { path: '', component: HomeComponent },        
  { path: 'bookings', component: BookingsComponent }, 

  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
