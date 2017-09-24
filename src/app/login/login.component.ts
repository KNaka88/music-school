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

    auth: any;
    state: string = '';

    constructor(private userService: UserService, private router: Router) {
        this.userService.getAuth().subscribe(auth => {
            if (auth) {
                this.router.navigateByUrl('/dashboard');
            }
        });
    }

    ngOnInit() {
    }
}
