import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [UserService]
})
export class LoginComponent implements OnInit {
    model: UserModel = {}; //UserModel;
    allUsers: UserModel[];
    loading = false;
    returnUrl: string;
    isInvalidUser: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService) { }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    protected login(): void
    {
        this.loading = true;
        this.userService.login(this.model).subscribe(response => {
            this.allUsers = response.json();
        this.isInvalidUser = !this.validateLogin(this.allUsers,this.model)
            if (!this.isInvalidUser)
            {
            console.log(localStorage.getItem("currentUser"));
            this.router.navigate(['/dashboard.component']);
            }
        },
            error => {
                console.log("Error in user get!" + error);
            });

        this.loading = false;
    }
    public validateLogin(users: UserModel[],user: UserModel): boolean
    {
        return users.some(u => 
        {
            if(u.userName === user.userName && u.password === user.password)
            {
                localStorage.setItem("currentUser", JSON.stringify(user));
                return true;
            }
            return false;
        });
    }
}
