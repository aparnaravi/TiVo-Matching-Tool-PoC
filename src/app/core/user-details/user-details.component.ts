import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/services/notification.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  User='Angel Merced'
  constructor(
  private router: Router,
  private notificationService:NotificationService

  ) { }

  ngOnInit() {
  }
  goToRecordMatch()
  {
    this.router.navigate(['/app/blackstar/recordmatch']);
  }
  onDownloadClick()
  {
    this.notificationService.showSnackNotification("Intializing download...")
  }
  shareDetails(){
    let navigator: any;
    navigator = window.navigator;
    if (navigator.share) {
      navigator.share({
        title: 'Share User Details via',
        text: 'Sharing User details',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(err => {
        console.log('Couldnot share because of', err.message);
      });
    } else {
      console.log('web share not supported');
    }
  }
}
