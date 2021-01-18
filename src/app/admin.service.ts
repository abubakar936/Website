import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = "http://localhost:3000/";
  admin
  resturant

  constructor(private http: HttpClient) { }
  logIn(admin) {
    return this.admin = this.http.post(this.url + "admin/login", admin)
  }
  // resturants who are new  for admin approval //
  getResturant() {
    return this.resturant = this.http.get(this.url + "admin/newRegister")

  }
  //  when admin click on approve button this api is called  --//
  approveResturant(resturantid, a) {
    return this.resturant = this.http.put(this.url + "admin/approveResturant/" + resturantid, a)
  }
  getAllResturants() {
    return this.http.get(this.url + "admin/getAllResturants")

  }
  getAllUsers() {
    return this.http.get(this.url + "admin/getAllUsers")
  }
  getAllCompletedReservations() {
    return this.http.get(this.url + "admin/getAllCompletedReservations")
  }
  getAllCompletedDeliveries() {
    return this.http.get(this.url + "admin/getAllCompletedDeliveries")
  }



}
