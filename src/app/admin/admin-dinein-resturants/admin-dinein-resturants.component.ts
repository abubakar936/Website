import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Admin.service';
import { ResturantsService } from 'src/app/user/resturants.service';

@Component({
  selector: 'app-admin-dinein-resturants',
  templateUrl: './admin-dinein-resturants.component.html',
  styleUrls: ['./admin-dinein-resturants.component.css']
})
export class AdminDineinResturantsComponent implements OnInit {

  resturants
  constructor(
    private service: AdminService,
    private resturantService: ResturantsService
  ) { }

  ngOnInit(): void {


    this.resturantService.getResturant()
      .subscribe
      (
        response => {
          this.resturants = response;
        })
  }
}
