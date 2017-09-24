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
    }

    ngOnInit() {
    }

    sendVerifyEmail(){
        this.userService.getAuth().subscribe( (auth) => {
            this.isVerifyEmailSent = true;
            auth.sendEmailVerification();
        });
    }

    ngAfterContentChecked() {
        this.userService.getAuth().subscribe( (auth) => {
            if (auth.emailVerified) {
                this.router.navigate(['/dashboard']);
            }
        });
    }
}
