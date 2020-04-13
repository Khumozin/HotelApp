import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaypalComponent } from 'src/app/components/paypal/paypal.component';
import { ConfirmationComponent } from 'src/app/pages/confirmation/confirmation.component';

import { BookingComponent } from '../../pages/booking/booking.component';
import { HomeComponent } from '../../pages/home/home.component';
import { PaymentComponent } from '../../pages/payment/payment.component';
import { RoomComponent } from '../../pages/room/room.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'room', component: RoomComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'paypal', component: PaypalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
