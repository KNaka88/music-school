import { Component } from '@angular/core';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [UserService]
})
export class ResetPasswordComponent {
    email: string;
    isSubmitted: boolean = false;
    message: string;

    constructor(
      private userService: UserService,
    ) { }

    resetPassword() {
      return this.userService.resetPassword(this.email).then( value => {
        this.isSubmitted = true;
        this.message = "Sent!";
      }, reason => {
        this.isSubmitted = true;
        this.message = "Please type correct email address";
      });
    }
}
