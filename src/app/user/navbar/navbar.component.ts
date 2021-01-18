import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';
import { ResturantsService } from '../resturants.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  user: any;
  showForm: boolean;
  updateForm: boolean;

  constructor(
    private service: ResturantsService,
    private userservice: UserdataService,
    private router: Router) { }

  ngOnInit(): void {
    this.user = this.userservice.user;
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


}

