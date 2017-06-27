import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        // private router: Router,
        // private userService: UserService,
        // private alertService: AlertService
        ) { }

    register() {
        this.loading = true;
        // this.userService.create(this.model)
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
        //http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial
    }
}