import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/core/authentication/models/api.model';
@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit{
  @Input() user!: User
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      username: [''],
      firstName: [''],
      lastName: [''],
      email: ['']
    });
  }


  ngOnInit(): void {
    // Set the form values based on the input user object
    this.profileForm.patchValue({
      username: this.user.username,
      email: this.user.email
    });

  }

  onSubmit() {
    if (this.profileForm.valid) {
      // Handle form submission here
      console.log(this.profileForm.value);
    }
  }

  changePhoto() {
    // Logic to handle changing photo
  }

  cancel() {
    // Logic to handle form cancellation
  }






}
