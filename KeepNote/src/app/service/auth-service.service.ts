import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

   isLoggedIn:boolean = false;

  constructor() { }

  login(securityCode:string){
    if(securityCode === "admin"){
     this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
  logout(){
    this.isLoggedIn = false;
   
  }
  isAuthenticate(){
    return this.isLoggedIn;
  }
}
