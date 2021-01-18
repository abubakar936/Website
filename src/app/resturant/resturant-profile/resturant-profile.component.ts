import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantsService } from 'src/app/user/resturants.service';
import { UserdataService } from 'src/app/userdata.service';

@Component({
  selector: 'app-resturant-profile',
  templateUrl: './resturant-profile.component.html',
  styleUrls: ['./resturant-profile.component.css']
})
export class ResturantProfileComponent implements OnInit {


  showForm: boolean;
  resturant: any;
  constructor(
    private service: ResturantsService,
    private userservice: UserdataService,
    private router: Router) { }

  ngOnInit(): void {
    this.resturant = this.service.resturant;
  }
  form(resturant) {
    this.showForm = true;

    console.log(resturant);
  }
  update(resturant, f) {
    this.service.updateResturant(resturant, f.value)
      .subscribe(response => {
        console.log("befor" + response);
        this.resturant = response
        console.log("restratnt" + this.resturant);
      }
      )
  }
}
