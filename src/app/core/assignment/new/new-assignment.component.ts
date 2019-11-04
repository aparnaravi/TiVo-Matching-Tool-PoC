import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface Source {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-new-assignment',
  templateUrl: './new-assignment.component.html',
  styleUrls: ['./new-assignment.component.scss']
})
export class NewAssignmentComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  source: Source[] = [
    { value: 'ASTRO', viewValue: 'ASTRO' },
    { value: 'ASTRO_DISCOVERY_ASIA', viewValue: 'ASTRO_DISCOVERY_ASIA' },
    { value: 'GOOGLEPLAY', viewValue: 'GOOGLEPLAY' }
  ];

  goToAssignments() {
    this.router.navigate(['/app/blackstar/assignments']);
  }

  goToRecordMatch() {
    this.router.navigate(['/app/blackstar/recordmatch']);
  }

  ngOnInit() {
  }
}
