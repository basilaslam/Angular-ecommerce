import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html'
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _authService: AuthService, private _router: Router) {
    this.signupForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log('submit');

    if (this.signupForm.valid) {
      const user = this.signupForm.value
      this._authService.register(user).subscribe((data)=>{
        if(data.success){
          localStorage.setItem("_user", JSON.stringify(data.data));
          this._router.navigate(['/auth/login'])
        }
      })
    }
  }
}
