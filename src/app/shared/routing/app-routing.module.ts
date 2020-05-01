import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/pages/main/main.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';
import { RoomTypesComponent } from 'src/app/pages/room-types/room-types.component';

import { PaypalComponent } from '../../components/paypal/paypal.component';
import { BookingComponent } from '../../pages/booking/booking.component';
import { CartComponent } from '../../pages/cart/cart.component';
import { ConfirmationComponent } from '../../pages/confirmation/confirmation.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { HomeComponent } from '../../pages/home/home.component';
import { PaymentComponent } from '../../pages/payment/payment.component';
import { RoomComponent } from '../../pages/room/room.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'room/:id', component: RoomComponent },
  { path: 'booking/:id', component: BookingComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'cart', component: CartComponent },
  { path: 'paypal', component: PaypalComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'roomtypes', component: RoomTypesComponent },
      { path: 'main', component: MainComponent },
      { path: '', component: MainComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
