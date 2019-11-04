import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { MatDialog } from '@angular/material';
import { NotificationComponent } from '../notification/notification.component';
import { NotificationEventService } from '../notification/notification-event.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  notificationShown = false;
  showAllNotification = true;
  hideCard
  menus = [
    { 'name': "Assignment", 'location': "assignments" },
    { 'name': "Activity", 'location': "activity" },
    { 'name': "Manage Users", 'location': "record/User/5646909" },
    { 'name': "Record Match", 'location': "recordmatch" }
  ];
  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    public notificationEventService: NotificationEventService

  ) {
    this.authService.isUserLoggedIn.subscribe(value => {
      this.isLoggedIn = value;
    });
    this.notificationEventService.notficationsHide$.subscribe(val => {
      if (val == true) {
        this.showAllNotification = false
      }
      else if (val == false) {
        this.showAllNotification = true;
      }
      else if (val == 'hideFirstCard') {
        this.hideCard = "first";
      }
      else if (val == 'hideSecondCard') {
        this.hideCard = "second";
      }
    });

  }
  ngOnInit() {
    this.authService.isUserLoggedIn.next(true);
  }
  showNotification(event, val) {
    this.notificationShown = true
    var dialogRef
    const dialogPosition = {
      top: event.y + 'px',
      left: event.x + 'px'
    };
    if (event.x < 800) {
      dialogRef = this.dialog.open(NotificationComponent, {
        width: '100%',
        height: '100%',
        hasBackdrop: false,
        data: { 'showAllNotification': this.showAllNotification, 'hideCard': this.hideCard },
      });
    }
    else {
      dialogRef = this.dialog.open(NotificationComponent, {
        width: '25%',
        height: '100%',
        position: { right: '0' },
        hasBackdrop: false,
        data: { 'showAllNotification': this.showAllNotification, 'hideCard': this.hideCard },
      });
    }
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.isTrue) {
        this.notificationShown = true;
      }
    });
  }


}
