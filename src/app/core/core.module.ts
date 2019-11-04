import { AssignmentPresentComponent } from './assignment/existing/assignment-present.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './header/profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { CoreRoutingModule } from './core.routing.module';
import { NewAssignmentComponent } from './assignment/new/new-assignment.component';
import { TrainingComponent } from './training/training.component';
import { AuthService } from './login/auth.service';
import { InboxComponent } from './activity/inbox/inbox.component';
import { InboxHeaderComponent } from './activity/inbox-header/inbox-header.component';
import { ChickletComponent } from './advanced-filter/chicklet/chicklet.component';
import { AdvancedSearchComponent } from './advanced-filter/advanced-search.component';
import { AdvancedSearchEventService } from './advanced-filter/advanced-search-event.service';
import { InboxActionComponent } from './activity/inbox-action/inbox-action.component';
import { BreadCrumbComponent } from './activity/inbox/bread-crumb/bread-crumb.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RecordDetailsComponent } from './record-details/record-details.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchResultTableComponent } from './search-result-table/search-result-table.component';
import { SelectedRowEventService } from './search-result-table/selected-row-event.service';
import { SearchTableServiceService } from './search-result-table/search-table-service.service';



@NgModule({
  declarations: [
    CoreComponent,
    TrainingComponent,
    NewAssignmentComponent,
    AssignmentPresentComponent,
    HeaderComponent,
    ProfileComponent,
    FooterComponent,
    LoginComponent,
    NotificationComponent,
    RegisterComponent,
    InboxComponent,
    ChickletComponent,
    InboxHeaderComponent,
    AdvancedSearchComponent,
    InboxActionComponent,
    BreadCrumbComponent,
    RecordDetailsComponent,
    UserDetailsComponent,
    SearchFormComponent,
    SearchResultTableComponent


  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CoreRoutingModule
  ],
  providers: [
    AuthService,
    AdvancedSearchEventService,
    SelectedRowEventService,
    SearchTableServiceService,
  ],
  exports: [
    LoginComponent,

  ],
  entryComponents: [
    NotificationComponent,
    SearchFormComponent,
    SearchResultTableComponent,


  ]
})
export class CoreModule { }
