import { Component, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/userdata.service';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private userService: UserdataService
  ) { }
  user: any;
  reservation: any;

  ngOnInit(): void {
    this.user = this.userService.user
  }
  updateUser(user, f) {
    this.userService.updateUser(user._id, f.value)
      .subscribe(
        respone => {
          this.user = respone;
          alert("profile updated ")
          console.log(this.user)
        }
      )
  }
  getReservation(userID) {
    this.userService.getReservation(userID)
      .subscribe(response => {
        this.reservation = response;
        //  this.user = response;
        console.log(this.reservation)
      })

  }
  formData
  form(user) {
    this.showForm = true
    this.formData = user;
    console.log(user.name)

  }
  showForm: boolean;
  updateInfo(userId, user) {
    this.showForm = true


    user.name
    let getUser = this.userService.updateUser(userId, user)
      .subscribe(
        response => {
          console.log(getUser)
        }
      )
  }
}
