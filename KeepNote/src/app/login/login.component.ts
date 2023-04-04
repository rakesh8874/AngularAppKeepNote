import { Component } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { RouteServiceService } from '../service/route-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authCode:string = "";

  constructor(private authService:AuthServiceService, private routeService:RouteServiceService){}
  
  validateAuthCode(){
    if(this.authService.login(this.authCode)){
      this.routeService.navegateToHome();
    }
  }
}
