import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserModel} from '../user.model';

@Injectable()
export class Authenticate implements CanActivate {
    constructor(private router:Router)
    {

    }
    public canActivate(): boolean
    {
        var usr: UserModel;
        if (localStorage.getItem("currentUser"))
        {
            usr = JSON.parse(localStorage.getItem("currentUser"));
            return true;
        }
        this.router.navigate(['/login.component']);
        return false;
    }
}
