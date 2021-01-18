import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantsService } from 'src/app/user/resturants.service';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-resturant-login',
  templateUrl: './resturant-login.component.html',
  styleUrls: ['./resturant-login.component.css']
})
export class ResturantLoginComponent implements OnInit {

  url = "http://localhost:3000/";
  resturant: any;
  constructor(
    private http: HttpClient,
    private service: ResturantsService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }
  resturantLogIn(f) {
    this.service.logIn(f.value)
      .subscribe(response => {
        this.service.resturant = response
        //  this.resturant = response
        console.log("respone coming inside resturant login");
        this.router.navigate(['/resturantDashBoard'])
      })
  }
}


