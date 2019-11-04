import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-present',
  templateUrl: './assignment-present.component.html',
  styleUrls: ['./assignment-present.component.scss']
})
export class AssignmentPresentComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  goToNewAssignment() {
    this.router.navigate(['/app/blackstar/newassignment']);
  }

  gotToRecordMatch () {
    this.router.navigate(['/app/blackstar/recordmatch']);
  }

  ngOnInit() {
  }

}
