import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';
import { User } from '../class/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

      //For register to firebase
      public error: any;

      //For registration form
      public displayError: any;
      public firstName: string;
      public lastName: string;
      public email: string;
      public password: string;
      public confirmPassword: string;
      public searchKeyword: string;
      public phoneNumber: number;

      //For registration form: css handling
      public isPasswordMatch: boolean;
      public isPasswordLength: boolean;
      public isEmailVerified: boolean;
      public emailValidation: RegExp = new RegExp( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

      constructor (private userService: UserService, private router: Router) {
          this.userService.getAuth().subscribe(auth => {
              if (auth && auth.emailVerified != null) {
                  this.router.navigateByUrl('/dashboard');
              }
          });
      }

      ngOnInit() {
      }


      ngDoCheck(){
        //if password length is more than 6, change color to green
        // if(this.password.length >= 6){
        //   this.isPasswordLength = true;
        // }else{
        //   this.isPasswordLength = false;
        // }
        //
        // //if password and confirm password matches, change color to green
        // if (this.password === this.confirmPassword && this.password.length >= 6){
        //   this.isPasswordMatch = true;
        // }else{
        //   this.isPasswordMatch = false;
        // }
        //
        // //if email is valid format, change color to green
        // if(this.emailValidation.test(this.email)){
        //   this.isEmailVerified = true;
        // }else {
        //   this.isEmailVerified = false;
        // }
      }

      createAccount() {
        this.userService.registerUser(this.email, this.password).then( (user) => {
            let newUser = new User(user.uid, this.firstName, this.lastName, this.email, this.phoneNumber);
            this.userService.createAccount(newUser).then(() => {
                this.userService.getAuth().subscribe( (auth) => {
                    auth.sendEmailVerification().then( () => {
                        this.router.navigate(['/verify-account']);
                    });
                });
            });
        });
    }
}
