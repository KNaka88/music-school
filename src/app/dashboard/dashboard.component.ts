import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {

    auth: any;
    state: string = '';

    constructor(private userService: UserService, private router: Router) {
        this.userService.getAuth().subscribe(auth => {
            if (auth) {
                this.auth = auth;
            }
        });
    }

    logout() {
        this.userService.logout();
        this.router.navigateByUrl('/login');
    }

    ngOnInit() {
    }
}
