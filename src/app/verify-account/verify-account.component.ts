import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.css'],
  providers: [UserService]

})
export class VerifyAccountComponent implements OnInit {
    verifyRequired: boolean = false;
    isVerifyEmailSent: boolean = false;

    constructor (private userService: UserService, private router: Router) {
        this.userService.getAuth().subscribe( (auth) => {
            if (auth === null) {
                this.router.navigateByUrl('/signup');
            } else {
                if (auth.emailVerified) {
                    this.router.navigateByUrl('/dashboard');
                }
            }
        });
    }

    ngOnInit() {
    }

    sendVerifyEmail(){
        this.userService.getAuth().subscribe( (auth) => {
            this.isVerifyEmailSent = true;
            auth.sendEmailVerification();
        });
    }
}
