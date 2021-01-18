import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Admin.service';

@Component({
  selector: 'app-admin-all-resturants',
  templateUrl: './admin-all-resturants.component.html',
  styleUrls: ['./admin-all-resturants.component.css']
})
export class AdminAllResturantsComponent implements OnInit {

  constructor(
    private service: AdminService
  ) { }

  allResturants   //Get All Resturant in response
  totalResturants //Number of resturants ^^^^
  ngOnInit(): void {

    //Get number of totall resturants

    this.service.getAllResturants()
      .subscribe(response => {
        this.allResturants = response
        this.totalResturants = this.allResturants.length
      })
  }
}