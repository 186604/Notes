import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {UserModel} from './user.model';


@Injectable()
export class UserService {

  constructor(private http: Http) { }
  public login(model: UserModel): Observable<Response>
  {
    return this.http.get('http://localhost:4200/assets/data/users.json')
    .map(response => response);
  }
}
