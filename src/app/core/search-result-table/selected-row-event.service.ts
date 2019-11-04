import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class SelectedRowEventService {
  public selecterRowEvent$ = new EventEmitter();
  selectedRecordData

  constructor() {
    this.selecterRowEvent$ = new EventEmitter();
  }
  getSelectedRecords(selectedRecords) {
    this.selecterRowEvent$.emit(selectedRecords);
  }


}

