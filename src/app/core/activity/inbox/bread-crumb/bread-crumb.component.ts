import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
  @Input() breadCrumbFor:string;
  currentRecordId
  typeofData
  constructor(
private router: Router,
private route: ActivatedRoute,


  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
          this.currentRecordId = params.id;
           }
  );
  }
  goToActivity()
  {
    this.router.navigate(['/app/blackstar/activity']);
  }
}
