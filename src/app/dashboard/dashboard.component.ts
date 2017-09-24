import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user/user.service';
import { User } from '../class/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {
    user: User;

    constructor(private userService: UserService, private router: Router) {
        this.userService.getAuth().subscribe(auth => {
            if (auth) {
                this.userService.getUser(auth.uid).subscribe( (user) => {
                    user.forEach( (e) => {
                        this.user = new User(auth.uid, e['firstName'], e['lastName'], e['email'], e['phoneNumber']);
                    });
                });
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
