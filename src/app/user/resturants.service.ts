import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResturantsService {
  url = "http://localhost:3000/"
  resturant: any;
  menus: any;
  constructor(private http: HttpClient) { }

  getResturant() {
    return this.http.get(this.url + 'resturant/')

  }
  getDeliveryResturant() {
    return this.http.get(this.url + 'resturant/delivery')

  }
  getMenu(resturantid) {
    return this.menus = this.http.get(this.url + 'resturant/menu/' + resturantid)

  }
  getResturantById(id) {
    return this.http.get(this.url + 'resturant/' + id)

  }
  signUp(resturant) {
    return this.http.post(this.url + 'resturant/signup', resturant)
  }
  logIn(resturant) {
    return this.resturant = this.http.post(this.url + "resturant/login", resturant)
  }

  addMenu(menu, resturantId) {
    return this.http.post(this.url + "resturant/addMenu/" + resturantId, menu)

  }
  updateMenu(menuId, menu) {
    return this.http.put(this.url + "resturant/menuupdate/" + menuId, menu)

  }

  updateResturant(resturantId, resturantInfo) {
    return this.http.put(this.url + "resturant/" + resturantId, resturantInfo)


  }
  getplacedReservations(resturantId) {
    return this.http.get(this.url + "resturant/Reservetion/placed/" + resturantId)

  }
  getconfirmReservations(resturantId) {
    return this.http.get(this.url + "resturant/Reservetion/confirm/" + resturantId)

  }
  getcompletedReservations(resturantId) {
    return this.http.get(this.url + "resturant/Reservetion/Completed/" + resturantId)

  }
  getReview(resturantId) {
    return this.http.get(this.url + "resturant/review/" + resturantId)

  }
  updateProfileVisit(resturantId) {
    return this.http.get(this.url + "resturant/profileVisits/" + resturantId)

  }
  getSearchedResturant(typeOfResturant) {
    return this.http.get(this.url + "resturant/searchByType/" + typeOfResturant)

  }
  popularReservationRseturants() {
    return this.http.get(this.url + "resturant/popularReservationRseturants")

  }
  popularDeliveryRseturants() {
    return this.http.get(this.url + "resturant/popularDeliveryRseturants")

  }
  recomandationSearch(f) {
    return this.http.post(this.url + "resturant/recomandationSearch", f)

  }
  getnewDeliveryRequests(resturantId) {
    return this.http.get(this.url + "resturant/Delivery/placed/" + resturantId)

  }
  getconfirmDeliveries(resturantId) {
    return this.http.get(this.url + "resturant/Delivery/confirm/" + resturantId)

  }
  getallDeliveries(resturantId) {
    return this.http.get(this.url + "resturant/Delivery/Completed/" + resturantId)

  }
  confirmReservation(resturantId) {
    return this.http.get(this.url + "resturant/confirmReservation/" + resturantId)
  }


  completeReservation(resturantId) {
    return this.http.get(this.url + "resturant/completeReservation/" + resturantId)
  }

  rejectReservation(resturantId, f) {
    return this.http.put(this.url + "resturant/rejectReservation/" + resturantId, f)

  }
  rejectDelivery(resturantId, f) {
    return this.http.put(this.url + "resturant/rejectDelivery/" + resturantId, f)

  }

  confirmdReservation(resturantId) {
    return this.http.get(this.url + "resturant/confirmdReservation/" + resturantId)

  }

  completedReservation(resturantId) {
    return this.http.get(this.url + "resturant/completedReservation/" + resturantId)
  }

  confirmDelivery(resturantId) {
    return this.http.get(this.url + "resturant/confirmDelivery/" + resturantId)
  }

  completedDelivery(resturantId) {
    return this.http.get(this.url + "resturant/completedDelivery/" + resturantId)
  }

  addcategory(resturantId, nameOfCategy) {
    return this.http.post(this.url + "resturant/addMenucategies/" + resturantId, nameOfCategy)
  }

}