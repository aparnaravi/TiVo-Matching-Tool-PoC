import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationEventService {
  public notficationsHide$ = new EventEmitter();
  constructor() { }
  allNotificaationsSeen(flag){
    this.notficationsHide$.emit(flag);
  }
  hideFirstNoftf(){
    this.notficationsHide$.emit('hideFirstCard');
  }
  hideSecondNoftf(){
    this.notficationsHide$.emit('hideSecondCard');
  }
}
