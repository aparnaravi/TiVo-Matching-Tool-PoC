import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerFormGroup:FormGroup=null
  hidePassword = true;
  constructor(
    private router: Router
  ) { }

  goToLogin () {
    this.router.navigate(['/app/blackstar/login']);
  }
  intializeRegisterFormGroup()
  {
this.registerFormGroup=new FormGroup({

"firstName": new FormControl(),
"lastName":new FormControl(),
"email":new FormControl(),
"password":new FormControl()
})
  }

  ngOnInit() {
    this.intializeRegisterFormGroup();
  }
}
