import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }

  showSnackNotification = (message: string) => {
    if (!message) {
      return;
    }
    this.snackBar.open(message, 'close', {
      duration: 2000,
    });
  }

}
