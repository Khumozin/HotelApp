import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmenitiesComponent } from 'src/app/pages/dashboard/amenities/amenities.component';
import { BookingsComponent } from 'src/app/pages/dashboard/bookings/bookings.component';
import { GalleryComponent } from 'src/app/pages/dashboard/gallery/gallery.component';
import { MainComponent } from 'src/app/pages/dashboard/main/main.component';
import { MaintenanceComponent } from 'src/app/pages/dashboard/maintenance/maintenance.component';
import { MessagesComponent } from 'src/app/pages/dashboard/messages/messages.component';
import { OtherReportsComponent } from 'src/app/pages/dashboard/other-reports/other-reports.component';
import { RoomDetailsComponent } from 'src/app/pages/dashboard/room-details/room-details.component';
import { RoomTypesComponent } from 'src/app/pages/dashboard/room-types/room-types.component';
import { SettingsComponent } from 'src/app/pages/dashboard/settings/settings.component';
import { SystemReportsComponent } from 'src/app/pages/dashboard/system-reports/system-reports.component';
import { UsersComponent } from 'src/app/pages/dashboard/users/users.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';

import { CartComponent } from '../../pages/cart/cart.component';
import { ConfirmationComponent } from '../../pages/confirmation/confirmation.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { HomeComponent } from '../../pages/home/home.component';
import { RoomComponent } from '../../pages/room/room.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'room/:id', component: RoomComponent },
  // { path: 'booking/:id', component: BookingComponent },
  { path: 'confirmation/:id', component: ConfirmationComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'roomtypes', component: RoomTypesComponent },
      { path: 'main', component: MainComponent },
      { path: 'maintenance', component: MaintenanceComponent },
      { path: 'systemreports', component: SystemReportsComponent },
      { path: 'otherreports', component: OtherReportsComponent },
      { path: 'amenities', component: AmenitiesComponent },
      { path: 'roomdetails', component: RoomDetailsComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'bookings', component: BookingsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent },
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
