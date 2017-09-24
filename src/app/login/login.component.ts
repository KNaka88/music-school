import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;
    auth: any;
    state: string = '';
    error: any;
    verifyRequired: boolean = false;
    isVerifyEmailSent: boolean = false;

    constructor (private userService: UserService, private router: Router) {
        this.userService.getAuth().subscribe(auth => {
            if (auth && auth.emailVerified != null) {
                this.router.navigateByUrl('/dashboard');
            }
        });
    }

    ngOnInit() {
    }

    login() {
      this.userService.login(this.email, this.password).then((user) => {

        //check if user verified the email (boolean)
        if (user.emailVerified) {
            this.router.navigateByUrl('dashboard');

        } else {
          //false
          this.verifyRequired = true;
        }
      })
      .catch((error: any) => {
        if (error) {
          this.error = error;
          alert(error.message);
        }
      });

      this.password = '';
    }


}
