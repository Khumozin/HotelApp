import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { GallleryCardComponent } from './components/galllery-card/galllery-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoomCarouselComponent } from './components/room-carousel/room-carousel.component';
import { RoomInfoComponent } from './components/room-info/room-info.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { RoomComponent } from './pages/room/room.component';
import { EnumToArrayPipe } from './shared/pipes/enum-to-array.pipe';
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { PaypalComponent } from './components/paypal/paypal.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GallleryCardComponent,
    NavbarComponent,
    RoomComponent,
    HomeComponent,
    RoomCarouselComponent,
    RoomInfoComponent,
    FeatureListComponent,
    BookingComponent,
    PaymentComponent,
    EnumToArrayPipe,
    ConfirmationComponent,
    PaypalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
