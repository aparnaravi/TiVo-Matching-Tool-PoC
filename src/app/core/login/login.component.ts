import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

import { GloabalConfig as config } from '../../config'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usermodel = {
    email: '',
    password: ''
  };
  constructor(
    private router: Router,
    private authService:AuthService
  ) {}

  goToRegisterion() {
    this.router.navigate(['/app/blackstar/register']);
  }

  authenticate() {
    this.authService.isUserLoggedIn.next(true);
    this.router.navigate(['/app/blackstar/assignments']);
  }

  ngOnInit() {
    console.log(config.getToolBarConfig());
    this.authService.isUserLoggedIn.next(false);
  }

}
