import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url = "http://localhost:3000/"
  constructor(private http: HttpClient) { }
  user: any;

  getUser(user) {
    this.http.post(this.url + "user/login", user)
      .subscribe(response => {
        this.user = response;
      })
    console.log("value of user inside getUser service" + this.user)
    return this.http.post(this.url + "user/login", user);

  }
  getReservation(userId) {
    return this.http.get(this.url + "user/Reservation/History/" + userId)
  }
  updateUser(userId, user) {
    let newuser = {
      "name": user.name,
      "phone": user.phone,
      "address": user.address,
      "password": user.password
    };

    return this.http.put(this.url + "user/" + userId, newuser)
  }
  // userId: req.body.userId,
  // resturantId: req.body.resturantId,
  // noOfPersons: req.body.noOfPersons,
  // dateOfReservation: req.body.dateOfReservation,
  // //  timeOfReservation:req.body.timeOfReservation,
  // order: req.body.order,
  saveReservation(f, order, userId, resturantId, total) {
    var reservation = {
      "noOfPersons": f.noOfPersons,
      "dateOfReservation": f.dateOfReservation,
      "order": order,
      "userId": userId,
      "resturantId": resturantId,
      "userEasyPaisaName": f.userEasyPaisaName,
      "userEasyPaisaPhoneNo": f.userEasyPaisaPhoneNo,
      "paymentBeforeReservation": f.paymentBeforeReservation,
      "totalBill": total
    }
    return this.http.post(this.url + "reservation", reservation)
  }
  saveDelivery(f, order, userId, resturantId, total) {
    var delivery = {
      // "dateOfdelivery": f.dateOfdelivery,
      "order": order,
      "userId": userId,
      "resturantId": resturantId,
      "totalBill": total,
      "address": f.address

    }
    return this.http.post(this.url + "delivery", delivery)
  }


  login(user) {
    return this.http.post(this.url + "login/", user)
  }
  signUp(user) {
    alert("i am working")
    return this.http.post(this.url + "user/SignUp/", user)

  }

  getplacedReservations(userId) {
    return this.http.get(this.url + "user/Reservetion/placed/" + userId)

  }
  getconfirmedReservations(userId) {
    return this.http.get(this.url + "user/Reservetion/confirm/" + userId)

  }
  getcompletedReservations(userId) {
    return this.http.get(this.url + "user/Reservetion/Completed/" + userId)

  }
  getplacedDeliveries(userId) {
    return this.http.get(this.url + "user/Delivery/placed/" + userId)
  }
  getConfirmedDeliveries(userId) {
    return this.http.get(this.url + "user/Delivery/confirm/" + userId)
  }
  getAllDeliveries(userId) {
    return this.http.get(this.url + "user/Delivery/Completed/" + userId)

  }
  addReview(resturantId, userId, review) {
    return this.http.post(this.url + "user/review/" + resturantId + "/" + userId, review)

  }


}


