import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomComponent } from '../../components/room/room.component';
import { BookingComponent } from '../../pages/booking/booking.component';
import { HomeComponent } from '../../pages/home/home.component';
import { PaymentComponent } from '../../pages/payment/payment.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'room', component: RoomComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
