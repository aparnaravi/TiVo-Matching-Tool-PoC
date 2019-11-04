import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-inbox-header',
  templateUrl: './inbox-header.component.html',
  styleUrls: ['./inbox-header.component.scss']
})
export class InboxHeaderComponent implements OnInit {

  @Input() viewDetails
  links = ['Activity', 'Manage Users', 'Record Match'];
  activeLink = this.links[0];

   constructor() { }

  ngOnInit() {
  }
  navElementClick(link){
    this.activeLink =link
   }

}
