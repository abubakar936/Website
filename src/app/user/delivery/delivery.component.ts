import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  url = "http://localhost:3000/"
  resturant: any;
  reservations: any;
  resturantid: any;
  menu: any;
  user: any;
  popularResturants
  constructor(
    private service: ResturantsService,
    private userservice: UserdataService
  ) { }

  ngOnInit(): void {
    this.service.getDeliveryResturant()
      .subscribe(response => {
        this.resturant = response;
        console.log(response);
      })

    this.service.popularDeliveryRseturants()
      .subscribe(response => {
        this.popularResturants = response
      })
    this.user = this.userservice.user
    console.log("this is from serviece in dashboard" + this.user)

  }
  getMenu(resturantid) {
    this.service.getMenu(resturantid)
      .subscribe(response => {
        this.menu = response;
        console.log(response);

      })
    this.service.updateProfileVisit(resturantid)
      .subscribe(response => {
        console.log(response);
      })

  }
  getSearchedResturant(typeOfResturant) {
    console.log(typeOfResturant)
    console.log(typeOfResturant.value)
    this.service.getSearchedResturant(typeOfResturant.value)
      .subscribe(response => {

        this.resturant = response;
        console.log(this.resturant);
        // alert(response)
      })

  }
}

