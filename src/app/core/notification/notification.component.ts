import { NotificationEventService } from './notification-event.service';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA  } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  showAllNotifications;
  hideFirstCard;
  hideSecondCard;
  hideCard
  hideAll=false;

  constructor(
    private router: Router,
    public notificationComponent: MatDialogRef<NotificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private notificationEventService: NotificationEventService,

  ) { }

  ngOnInit() {
    this.showAllNotifications=this.data.showAllNotification;
   if(this.data.hideCard=='first'){
    this.hideFirstCard=true;
   }
   else if(this.data.hideCard=='second'){
    this.hideSecondCard=true
   }
   else{
    this.hideFirstCard=false;
    this.hideSecondCard=false
   }
  }
  close(): void {
    this.notificationComponent.close(this.hideAll);
  }
  goToRecordMatch () {
    this.router.navigate(['/app/blackstar/recordmatch']);
  }
  goToRecordDetails(){
    this.router.navigate(['/app/blackstar/record/RecordID/3467589']);
  }
  hideNotification(cardid)
  {
    (cardid=="first")?this.hideFirstCard=true:((cardid=="second")?this.hideSecondCard=true:'');

    if(this.hideFirstCard && this.hideSecondCard){
      this.hideAll=true;
      this.notificationEventService.allNotificaationsSeen(this.hideAll);
    }
    (this.hideFirstCard)? this.notificationEventService.hideFirstNoftf():'';
    (this.hideSecondCard)? this.notificationEventService.hideSecondNoftf():'';


  }

}
