import {Injectable} from '@angular/core';
import {UserModel} from './user.model';
//import {Http} from '@angular/http';

@Injectable()
export class LoginService
{
baseUrl:string = 'http://localhost:8085/api/';

    // commonHeaders:Headers = {
    //         'Content-Type', 'application/json; charset=utf-8',
    //         'Access-Control-Allow-Headers': 'redirectUrl',
    //         'Access-Control-Allow-Methods': '*', //GET, POST, PUT, PATCH, DELETE
    //         'Access-Control-Allow-Origin': '*'
    //     };
    user:UserModel;

    validateLogin(): UserModel{

       this.user =  {
userId:"186604",
           firstName:'Rajan',
           lastName: 'Alagarsamy',
           password: 'Test'
       } as UserModel;
       return this.user;
    }
}