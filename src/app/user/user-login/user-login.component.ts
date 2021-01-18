import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserdataService } from 'src/app/userdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {



  // sets up routes constant where you define your routes

  masterName: string;
  url = "http://localhost:3000/"
  resturant: any;
  reservations: any;
  user: any
  constructor(private http: HttpClient,
    private service: UserdataService,

    private route: ActivatedRoute, private router: Router) {

  }
  logIn(user) {
    this.service.getUser(user.value)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/Dashboard'])

        }


      )
  }
  signUp(f) {
    this.service.signUp(f.value).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/'])

      }
    )
  }
  resturantSignUp() {

    this.router.navigate(['/Resturant/SignUp'])

  }

  seeResturants() {
    this.http.get(this.url + 'resturant/')
      .subscribe(response => {
        this.resturant = response;
        console.log(response);
      })
  }
  ngOnInit(): void {
  }
}


