import { AuthService } from './../../login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {

  }

  goToLogin() {
    this.authService.isUserLoggedIn.next(false);
    this.router.navigate(['/app/blackstar/login']);
  }

  goToTraining() {
    this.router.navigate(['/app/blackstar/training']);
  }

  goToAssignment() {
    this.router.navigate(['/app/blackstar/assignments']);
  }

  ngOnInit() { }

}
