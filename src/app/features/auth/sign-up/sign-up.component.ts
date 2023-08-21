import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html'
})
export class SignupComponent implements OnDestroy{
  signupForm: FormGroup;
  subs = new SubSink()


  constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private _router: Router) {
    this.signupForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {

    if (this.signupForm.valid) {
      const user = this.signupForm.value
     this.subs.add(this._authService.register(user).subscribe((data)=>{
        if(data.success){
          this._router.navigate(['/auth/login'])
        }
      }))
    }
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe()
  }
}
