import { Component } from '@angular/core';
import { UserService } from '../service/user/user.service';


@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css'],
  providers: [UserService]
})
export class UpdatePasswordComponent {
    email: string;
    password: string;
    newPassword: string;
    confirmPassword: string;
    isPasswordMatch: boolean;
    isPasswordLength: boolean;
    isChangePasswordFormOpened: boolean = false;
    isAccountSettingOpened: boolean = false;


    constructor(
      private userService: UserService,
    ) { }

    //
    // ngDoCheck(){
    //   //if password length is more than 6, change color to green
    //   if (this.newPassword.length >= 6) {
    //     this.isPasswordLength = true;
    //   } else {
    //     this.isPasswordLength = false;
    //   }
    //
    //   //if password and confirm password matches, change color to green
    //   if (this.newPassword === this.confirmPassword && this.newPassword.length >= 6) {
    //     this.isPasswordMatch = true;
    //   } else {
    //     this.isPasswordMatch = false;
    //   }
    // }

    confirm() {
      let promise = new Promise((resolve) => {
        let credential = this.userService.getCredentials(this.email, this.password);
        resolve(credential);
      });

      promise.then( (credential) => {
        this.userService.reauthenticate(credential).then( ()=> {
          //user reauthenticated
          this.isChangePasswordFormOpened = true;
        }), function(error){
          //error
          console.log(error);
        }
      });
    }

    updatePassword(){
      //check if form is typed correct
    //   let verified = (this.isPasswordMatch && this.isPasswordLength);
    //   if(verified) {
        this.userService.updatePassword(this.newPassword).then( () => {
            //success
            //clear the form
            console.log('password update success');
            this.newPassword = '';
            this.confirmPassword = '';
        }), function(error) {
            //show the result message
            console.log(error);
        };
      }
    // }
}
