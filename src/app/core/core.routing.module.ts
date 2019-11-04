import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentPresentComponent } from './assignment/existing/assignment-present.component';
import { NewAssignmentComponent } from './assignment/new/new-assignment.component';
import { TrainingComponent } from './training/training.component';
import { LoginComponent } from './login/login.component';
import { CoreComponent } from './core.component';
import { RegisterComponent } from './register/register.component';
import { RecordDetailsComponent } from './record-details/record-details.component';
import { InboxComponent } from './activity/inbox/inbox.component';
import { UserDetailsComponent } from './user-details/user-details.component';
const routes: Routes = [{
  path: 'blackstar',
  component: CoreComponent,
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'assignments', component: AssignmentPresentComponent },
    { path: 'newassignment', component: NewAssignmentComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'record/User/:id', component: UserDetailsComponent },
    { path: 'record/RecordID/:id', component: RecordDetailsComponent },
    { path: 'record/Team/:id', component: UserDetailsComponent },
    { path: 'record/Action/:id', component: RecordDetailsComponent },
    { path: 'activity', component: InboxComponent },
    { path: 'recordmatch', loadChildren: './recordMatch/recordMatch.module#RecordMatchModule' },
    {
      path: '',
      redirectTo: '/app/blackstar/login'
    }
  ]
}, {
  path: '',
  redirectTo: '/app/blackstar/login'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }