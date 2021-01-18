import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Admin.service';

@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent implements OnInit {

  constructor(
    private service: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {


  }
  adminLogIn(f) {
    this.service.logIn(f.value)
      .subscribe(response => {
        this.service.admin = response
      })
    this.service.getResturant()
      .subscribe(response => {
        console.log(response)
        this.service.resturant = response;
      })
    this.router.navigate(['/adminDashBoard'])
  }

}
