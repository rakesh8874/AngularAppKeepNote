import { Component } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';
import { RouteServiceService } from '../service/route-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  loginStatus:boolean = false;

  constructor(private authService:AuthServiceService, private routeService:RouteServiceService){}

  logout(){
      this.authService.logout();
      this.loginStatus = this.authService.isLoggedIn;
      this.routeService.navegateToLogin();
    }
  }
