import { NotificationService } from './../shared/services/notification.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SearchResultTableComponent } from '../search-result-table/search-result-table.component';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  isAutopopulate:boolean=true
  recordTypes = ['Episode', 'Movie', 'TVSeries'];
  recordStatus = ['Matched', 'Accepted', 'Verified', 'Flagged', 'Reported', 'UnVerified', 'No Match'];
  defaultStatus = "UnVerified";
  defaultRecordType = "Episode";
  parentId = "379208";
  cosmoId = "961802";
  recordId = "RV#66799";
  recordTitle = "The Industry";
  episodeTitle = "The Industry:An Outlook";
  episodeNumber = "16";
  seasonNumber = "5";
  seriesMaster = "2";
  seriesMasterId = "SMID02";
  releaseYear  =new Date((new Date().getTime() - 3888000000));
  airDate= new Date((new Date().getTime() - 3888000000));;
  language = "English";
  constructor(
    public searchFormComponent: MatDialogRef<SearchFormComponent>,
    public dialog: MatDialog,
    private notificationService:NotificationService

  ) { }

  ngOnInit() {
  }
  close() {
    this.searchFormComponent.close();
  }
  autoPopulateForm(event) {
    if (event.checked == true ) {
      this.defaultStatus = "UnVerified";
      this.defaultRecordType = "Episode";
      this.parentId = "379208";
      this.cosmoId = "961802";
      this.recordId = "RV#66799";
      this.recordTitle = "The Industry";
      this.episodeTitle = "The Industry:An Outlook";
      this.episodeNumber = "16";
      this.seasonNumber = "5";
      this.seriesMaster = "2";
      this.seriesMasterId = "SMID02";
      this.releaseYear =new Date((new Date().getTime() - 3888000000));
      this.airDate= new Date((new Date().getTime() - 3888000000));
      this.language = "English";
    }
    else {
      this.isAutopopulate=false;
      this.defaultStatus = "";
      this.defaultRecordType = "";
      this.parentId = "";
      this.cosmoId = "";
      this.recordId = "";
      this.recordTitle = "";
      this.episodeTitle = "";
      this.episodeNumber = "";
      this.seasonNumber = "";
      this.seriesMaster = "";
      this.seriesMasterId = "";
      this.releaseYear=new Date("") ;
      this.airDate = new Date("");
      this.language = "";
    }
  }

  openSearchTable() {
    if(this.isAutopopulate || this.defaultRecordType!="" || this.recordTitle != "" ){
      this.searchFormComponent.close();
      const dialogRef = this.dialog.open(SearchResultTableComponent, {
        width: '60%',
        height: '100%',
        position: { right: '0' },
        hasBackdrop: false
      })
      dialogRef.afterClosed().subscribe(value => {
        if (value == 'true') {
          this.dialog.open(SearchFormComponent, {
            width: '60%',
            height: '100%',
            position: { right: '0' },
            hasBackdrop: false
          })
        }

      });
    }
    else{
      this.notificationService.showSnackNotification("Please provide appropriate details for search")
    }

  }
}