import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { UserdataService } from 'src/app/userdata.service';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor(
    private route: Router,
    private service: UserdataService
  ) { }

  ngOnInit(): void {
  }


  signUp(f) {
    this.service.signUp(f.value).subscribe(
      response => {
        console.log(response);
        this.route.navigate(['/'])

      }
    )

  }
}
