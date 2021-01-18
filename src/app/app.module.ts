import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { ReservationComponent } from './user/reservation/reservation.component';
import { SuggestionComponent } from './user/suggestion/suggestion.component';
import { ResturantSignupComponent } from './resturant/resturant-signup/resturant-signup.component';
import { ResturantLoginComponent } from './resturant/resturant-login/resturant-login.component';
import { RiderLoginComponent } from './rider/rider-login/rider-login.component';
import { RiderSignupComponent } from './rider/rider-signup/rider-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './user/menu/menu.component';
import { ResturantsService } from './user/resturants.service'
import { UserdataService } from '../app/userdata.service';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DeliveryComponent } from './user/delivery/delivery.component';
import { ResturantDashboardComponent } from './resturant/resturant-dashboard/resturant-dashboard.component';
import { AdminLogInComponent } from './admin/admin-log-in/admin-log-in.component';
import { AdminsignUpComponent } from './admin/adminsign-up/adminsign-up.component';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';
AdminService
import { AdminService } from '../app/Admin.service';
import { SidebarComponent } from './resturant/sidebar/sidebar.component';
import { ResturantMenuComponent } from './resturant/resturant-menu/resturant-menu.component';
import { ResturantProfileComponent } from './resturant/resturant-profile/resturant-profile.component';
import { ResturantReservationComponent } from './resturant/resturant-reservation/resturant-reservation.component';
import { NewReservationRequestsComponent } from './resturant/new-reservation-requests/new-reservation-requests.component';
import { CompletedReservationsComponent } from './resturant/completed-reservations/completed-reservations.component';
import { CenceledReservationsComponent } from './resturant/cenceled-reservations/cenceled-reservations.component';
import { ReservationsHistoryComponent } from './resturant/reservations-history/reservations-history.component';
import { ConfirmReservationsComponent } from './resturant/confirm-reservations/confirm-reservations.component';
import { LogoComponent } from './logo/logo.component';
import { NewReservationRequestComponent } from './user/new-reservation-request/new-reservation-request.component';
import { ReservationHistoryComponent } from './user/reservation-history/reservation-history.component';
import { ConfirmedReservationsComponent } from './user/confirmed-reservations/confirmed-reservations.component';
import { ResturantNavBarComponent } from './user/resturant-nav-bar/resturant-nav-bar.component';
import { ResturantReviewComponent } from './user/resturant-review/resturant-review.component';
import { ResturantsmenuComponent } from './user/resturantsmenu/resturantsmenu.component';
import { ResturantsprofileComponent } from './user/resturantsprofile/resturantsprofile.component';
import { ResturantinfoComponent } from './user/resturantinfo/resturantinfo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewDeliveryRequestsComponent } from './user/new-delivery-requests/new-delivery-requests.component';
import { ConfirmedeliveriesComponent } from './user/confirmedeliveries/confirmedeliveries.component';
import { AllDeliveriesComponent } from './user/all-deliveries/all-deliveries.component';
import { NewDeliveriesComponent } from './resturant/new-deliveries/new-deliveries.component';
import { ConfirmDeliveriesComponent } from './resturant/confirm-deliveries/confirm-deliveries.component';
import { CencelDeliveriesComponent } from './resturant/cencel-deliveries/cencel-deliveries.component';
import { CompletedDeliveriesComponent } from './resturant/completed-deliveries/completed-deliveries.component';
import { ReservationMenuComponent } from './user/reservation-menu/reservation-menu.component';
import { AdminAllResturantsComponent } from './admin/admin-all-resturants/admin-all-resturants.component';
import { AdminNewResturantsComponent } from './admin/admin-new-resturants/admin-new-resturants.component';
import { AdminResturantComplainsComponent } from './admin/admin-resturant-complains/admin-resturant-complains.component';
import { AdminSuggestionsComponent } from './admin/admin-suggestions/admin-suggestions.component';
import { AdminDineinResturantsComponent } from './admin/admin-dinein-resturants/admin-dinein-resturants.component';
import { AdminDeliveryResturantsComponent } from './admin/admin-delivery-resturants/admin-delivery-resturants.component';
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserDashboardComponent,
    NavbarComponent,
    ReservationComponent,
    SuggestionComponent,
    ResturantSignupComponent,
    ResturantLoginComponent,
    RiderLoginComponent,
    RiderSignupComponent,
    MenuComponent,
    UserProfileComponent,
    DeliveryComponent,
    ResturantDashboardComponent,
    AdminLogInComponent,
    AdminsignUpComponent,
    AdminDashBoardComponent,
    SidebarComponent,
    ResturantMenuComponent,
    ResturantProfileComponent,
    ResturantReservationComponent,
    NewReservationRequestsComponent,
    CompletedReservationsComponent,
    CenceledReservationsComponent,
    ReservationsHistoryComponent,
    ConfirmReservationsComponent,

    LogoComponent,

    NewReservationRequestComponent,

    ReservationHistoryComponent,

    ConfirmedReservationsComponent,

    ResturantNavBarComponent,

    ResturantReviewComponent,

    ResturantsmenuComponent,

    ResturantsprofileComponent,

    ResturantinfoComponent,

    NewDeliveryRequestsComponent,

    ConfirmedeliveriesComponent,

    AllDeliveriesComponent,

    NewDeliveriesComponent,

    ConfirmDeliveriesComponent,

    CencelDeliveriesComponent,

    CompletedDeliveriesComponent,

    ReservationMenuComponent,

    AdminAllResturantsComponent,

    AdminNewResturantsComponent,

    AdminResturantComplainsComponent,

    AdminSuggestionsComponent,

    AdminDineinResturantsComponent,

    AdminDeliveryResturantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule,
    DataTablesModule,
    ReactiveFormsModule,
    NgbModule

  ],
  providers: [
    ResturantsService,

    UserdataService,
    AdminService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
