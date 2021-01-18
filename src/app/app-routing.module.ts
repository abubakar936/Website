import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component'
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { ReservationComponent } from './user/reservation/reservation.component';
import { SuggestionComponent } from './user/suggestion/suggestion.component';
import { ResturantSignupComponent } from './resturant/resturant-signup/resturant-signup.component';
import { ResturantLoginComponent } from './resturant/resturant-login/resturant-login.component';
import { RiderLoginComponent } from './rider/rider-login/rider-login.component';
import { RiderSignupComponent } from './rider/rider-signup/rider-signup.component';
import { MenuComponent } from './user/menu/menu.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { DeliveryComponent } from './user/delivery/delivery.component';
import { ResturantDashboardComponent } from './resturant/resturant-dashboard/resturant-dashboard.component';
import { AdminDashBoardComponent } from './admin/admin-dash-board/admin-dash-board.component';
import { AdminLogInComponent } from './admin/admin-log-in/admin-log-in.component';
import { ResturantMenuComponent } from './resturant/resturant-menu/resturant-menu.component';
import { ResturantProfileComponent } from './resturant/resturant-profile/resturant-profile.component';
import { NewReservationRequestsComponent } from './resturant/new-reservation-requests/new-reservation-requests.component';
import { CompletedReservationsComponent } from './resturant/completed-reservations/completed-reservations.component';
import { ConfirmReservationsComponent } from './resturant/confirm-reservations/confirm-reservations.component';
import { ReservationsHistoryComponent } from './resturant/reservations-history/reservations-history.component';
import { ReservationHistoryComponent } from './user/reservation-history/reservation-history.component';
import { NewReservationRequestComponent } from './user/new-reservation-request/new-reservation-request.component';
import { ConfirmedReservationsComponent } from './user/confirmed-reservations/confirmed-reservations.component';
import { ResturantReviewComponent } from './user/resturant-review/resturant-review.component';
import { NewDeliveryRequestsComponent } from './user/new-delivery-requests/new-delivery-requests.component';
import { ConfirmedeliveriesComponent } from './user/confirmedeliveries/confirmedeliveries.component';
import { AllDeliveriesComponent } from './user/all-deliveries/all-deliveries.component';
import { CompletedDeliveriesComponent } from './resturant/completed-deliveries/completed-deliveries.component';
import { NewDeliveriesComponent } from './resturant/new-deliveries/new-deliveries.component';
import { ConfirmDeliveriesComponent } from './resturant/confirm-deliveries/confirm-deliveries.component';
import { ReservationMenuComponent } from './user/reservation-menu/reservation-menu.component';
import { AdminNewResturantsComponent } from './admin/admin-new-resturants/admin-new-resturants.component';
import { AdminAllResturantsComponent } from './admin/admin-all-resturants/admin-all-resturants.component';
import { AdminDineinResturantsComponent } from './admin/admin-dinein-resturants/admin-dinein-resturants.component';
import { AdminDeliveryResturantsComponent } from './admin/admin-delivery-resturants/admin-delivery-resturants.component';


const routes: Routes = [
  { path: '', component: UserLoginComponent, pathMatch: 'full' },
  { path: 'SignUp', component: UserSignupComponent, pathMatch: 'full' },
  { path: 'Menu/:resturant._id', component: MenuComponent, pathMatch: 'full' },
  { path: 'reservationMenu/:resturant._id', component: ReservationMenuComponent, pathMatch: 'full' },

  { path: 'Dashboard', component: UserDashboardComponent },
  { path: 'Resturant/SignUp', component: ResturantSignupComponent },
  { path: 'LogIn/Resturant', component: ResturantLoginComponent },
  { path: 'Profile', component: UserProfileComponent },
  { path: 'Delivery', component: DeliveryComponent },

  { path: 'resturantDashBoard/ResturantProfile', component: ResturantProfileComponent },
  { path: 'resturantDashBoard/newReservationRequest', component: NewReservationRequestsComponent },
  { path: 'resturantDashBoard/completedRservations', component: CompletedReservationsComponent },


  { path: 'resturantDashBoard/newDeliveryRequest', component: NewDeliveriesComponent },
  { path: 'resturantDashBoard/confirmDelivery', component: ConfirmDeliveriesComponent },
  { path: 'resturantDashBoard/completedDelivery', component: CompletedDeliveriesComponent },


  { path: 'Dashboard/newReservationRequest', component: NewReservationRequestComponent },
  { path: 'Dashboard/confirmReservations', component: ConfirmedReservationsComponent },
  { path: 'Dashboard/reservationHistory', component: ReservationHistoryComponent },


  { path: 'Dashboard/newDeliveryRequest', component: NewDeliveryRequestsComponent },
  { path: 'Dashboard/confirmdeliveries', component: ConfirmedeliveriesComponent },
  { path: 'Dashboard/AllDeliveries', component: AllDeliveriesComponent },

  { path: 'resturantDashBoard/confirmRservations', component: ConfirmReservationsComponent },
  { path: 'resturantDashBoard', component: ResturantDashboardComponent },
  { path: 'resturantmenu', component: ResturantMenuComponent },



  { path: 'adminDashBoard/dineinResturants', component: AdminDineinResturantsComponent },
  { path: 'adminDashBoard/deliveryResturants', component: AdminDeliveryResturantsComponent },
  { path: 'adminDashBoard/allResturants', component: AdminAllResturantsComponent },
  { path: 'adminDashBoard/newResturants', component: AdminNewResturantsComponent },
  { path: 'LogIn/admin', component: AdminLogInComponent },



  { path: 'adminDashBoard', component: AdminDashBoardComponent },
  { path: 'LogIn/admin', component: AdminLogInComponent },


  { path: 'Reviews', component: ResturantReviewComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
