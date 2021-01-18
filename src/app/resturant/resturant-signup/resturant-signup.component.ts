import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantsService } from 'src/app/user/resturants.service';

@Component({
  selector: 'app-resturant-signup',
  templateUrl: './resturant-signup.component.html',
  styleUrls: ['./resturant-signup.component.css']
})
export class ResturantSignupComponent implements OnInit {

  constructor(
    private route: Router,
    private service: ResturantsService
  ) { }

  ngOnInit(): void {
  }

  registerResturant(f) {
    this.service.signUp(f.value).subscribe(
      response => {
        alert("Registeration Done successfuly")
        this.route.navigate(['/LogIn/Resturant'])
        console.log(response);


      }
    )

  }
}