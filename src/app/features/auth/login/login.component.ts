import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  subs = new SubSink()

  constructor(private _formBuilder: FormBuilder, private _authSercice: AuthService, private _router: Router) {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const user = this.loginForm.value
      this.subs.add(this._authSercice.login(user).subscribe((data => {
        if(data.success){
          this._authSercice.saveData(data)
          this._router.navigate(['/'])
        }
      })))
    }
  }

  onDestroy(){
    this.subs.unsubscribe()
  }
}
