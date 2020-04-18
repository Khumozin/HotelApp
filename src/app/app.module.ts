import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FeatureListComponent } from './components/feature-list/feature-list.component';
import { GallleryCardComponent } from './components/galllery-card/galllery-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaypalComponent } from './components/paypal/paypal.component';
import { RoomCarouselComponent } from './components/room-carousel/room-carousel.component';
import { RoomInfoComponent } from './components/room-info/room-info.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { HomeComponent } from './pages/home/home.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { RoomComponent } from './pages/room/room.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FollowComponent } from './sections/follow/follow.component';
import { FooterComponent } from './sections/footer/footer.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { IconBoxesComponent } from './sections/icon-boxes/icon-boxes.component';
import { SliderComponent } from './sections/slider/slider.component';
import { WelcomeComponent } from './sections/welcome/welcome.component';
import { EnumToArrayPipe } from './shared/pipes/enum-to-array.pipe';
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { TableComponent } from './components/table/table.component';
import { CartComponent } from './pages/cart/cart.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoadingComponent } from './components/loading/loading.component';

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
    PaypalComponent,
    SliderComponent,
    WelcomeComponent,
    IconBoxesComponent,
    GalleryComponent,
    ContactComponent,
    FollowComponent,
    FooterComponent,
    TableComponent,
    CartComponent,
    ModalComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
