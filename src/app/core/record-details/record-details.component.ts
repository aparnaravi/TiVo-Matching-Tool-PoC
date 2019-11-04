import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/services/notification.service';
@Component({
  selector: 'app-record-details',
  templateUrl: './record-details.component.html',
  styleUrls: ['./record-details.component.scss']
})
export class RecordDetailsComponent implements OnInit {
  recordDetails='recordDetails';
  RecordId="record"
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
}
