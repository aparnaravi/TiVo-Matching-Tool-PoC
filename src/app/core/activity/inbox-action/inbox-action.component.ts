import { NotificationService } from '../../shared/services/notification.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-inbox-action',
  templateUrl: './inbox-action.component.html',
  styleUrls: ['./inbox-action.component.scss']
})
export class InboxActionComponent implements OnInit {

  @Input() selectedRecordsList:[];
  constructor(
    private notificationService:NotificationService
  ) { }

  ngOnInit(

  ) {
  }
  onActionClick()
  {
      if(this.selectedRecordsList.length<=0)
      {
        this.notificationService.showSnackNotification("Select atleast one record to perform action");

      }
      else{
        this.notificationService.showSnackNotification("Invoking action for the selected record(s)");

      }
  }
  onDownloadClick()
  {
    if(this.selectedRecordsList.length<=0)
    {
      this.notificationService.showSnackNotification("Select atleast one record to perform download");

    }
    else{
      this.notificationService.showSnackNotification("Initializing download for the selected record(s)");

    }
  }
}
