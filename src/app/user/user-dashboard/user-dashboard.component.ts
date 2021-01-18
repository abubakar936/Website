import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResturantsService } from '../resturants.service'
import { Router, ActivatedRoute } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  url = "http://localhost:3000/"
  resturant: any;
  reservations: any;
  resturantid: any;
  menu: any;
  resturantVisit
  popularResturants
  @Input() user: any;
  constructor(
    private service: ResturantsService,
    private userservice: UserdataService,
    private route: ActivatedRoute,
    private router: Router) {

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

  seeResturants() {
    this.service.getResturant()
      .subscribe(response => {
        this.resturant = response;
        console.log(response);
      })
  }
  //  resturant=this.seeResturants();
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
  search(value) {
    console.log(value);

  }
  recomandationSearch(f) {
    //    console.log(f.value)
    this.service.recomandationSearch(f.value)
      .subscribe(response => {
        this.resturant = response;
        //  console.log(response);
      })
  }
  ngOnInit(): void {
    this.service.getResturant()
      .subscribe(response => {
        this.resturant = response;
        console.log(response);
      })

    this.service.popularReservationRseturants()
      .subscribe(response => {
        this.popularResturants = response
      })
    this.user = this.userservice.user
    console.log("this is from serviece in dashboard" + this.user)

  }


}

