import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';
import { ResturantsService } from '../resturants.service'

interface menu {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-reservation-menu',
  templateUrl: './reservation-menu.component.html',
  styleUrls: ['./reservation-menu.component.css']
})
export class ReservationMenuComponent implements OnInit {


  myDate = Date.now();
  order: menu[] = [];
  menus: any;
  resturant: any;
  constructor(
    private service: ResturantsService,
    private route: ActivatedRoute,
    private userService: UserdataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe
      (params => {
        const id = params.get('resturant._id');
        this.service.getMenu(id)
          .subscribe(response => {
            this.menus = response;
          })
        this.service.getResturantById(id)
          .subscribe(response => {
            this.resturant = response;
            console.log(response);
          })
      })
  }

  total: number;
  AddToCart(menu) {
    this.order.push(menu);
    console.log(this.order);
    let arr = this.order;
    var total = 0;
    for (var i in arr) {
      total += arr[i].price;
      this.total = total
      console.log(this.total);
      // console.log(this.order.length)
      // if (this.order.length === 0) {
      //   this.order.push(menu);
      // }
      // else {
      //   for (let i = 0; i < this.order.length; i++) {
      //     if (this.order[i].name === menu.name) {
      //       this.order[i].quantity++
      //     }
      //     else {
      //       this.order.push(menu);
      //     }
      //   }
    }
  }

  removeToCart(menu) {
    let index = this.order.indexOf(menu)
    this.total = this.total - menu.price;
    this.order.splice(index, 1);
    console.log(this.order)
  }
  getReviews(resturantid) {
    this.service.getReview(resturantid)
      .subscribe(response => {
        this.service.resturant = response
        //  this.resturant = response
        this.router.navigate(['/Reviews'])
      })
  }
  form(f) {
    console.log(f.value)
  }
  userId = this.userService.user._id;
  resturantId;
  saveReservation(f, order, userId, total) {
    this.route.paramMap
      .subscribe
      (params => {
        this.resturantId = params.get('resturant._id');
      })
    var reservation = this.userService.saveReservation
      (f.value, order, this.userId, this.resturantId, this.total)
      .subscribe(
        response => {
          alert("Reservation Successful");
          console.log("this response is coming from reservation api " + response)
        },
        error => {
          console.log('oops', error)
          alert(error.error.text)

        }
      )

  }

}
