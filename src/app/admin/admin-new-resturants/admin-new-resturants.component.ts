import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Admin.service';

@Component({
  selector: 'app-admin-new-resturants',
  templateUrl: './admin-new-resturants.component.html',
  styleUrls: ['./admin-new-resturants.component.css']
})
export class AdminNewResturantsComponent implements OnInit {



  constructor(
    private service: AdminService
  ) { }
  resturants


  approveResturant(id, a) {
    this.service.approveResturant(id, a)
      .subscribe(response => {
        alert("resturant is approved")
        console.log(response);
        //this.resturants = response
      })

  }
  ngOnInit(): void {
    this.resturants = this.service.resturant;
  }


}
