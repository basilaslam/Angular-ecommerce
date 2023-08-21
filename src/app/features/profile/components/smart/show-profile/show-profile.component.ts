import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/core/authentication/models/api.model';
import { Profile } from '../../../modals/profileApiResponse';
import { ProfileService } from '../../../services/profile.service';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit{
  @Input() user!: User
  profile!: Profile
  profileForm: FormGroup;
  mode: 'EDIT'| 'SHOW' = 'SHOW'
  isInputDisabled = true
  image!: string

  constructor(private fb: FormBuilder, private _profileService: ProfileService, private _toast: HotToastService) {
    this.profileForm = this.fb.group({
      username: [{ value: '', disabled: true }],
      firstName: [{ value: '', disabled: true }],
      lastName: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }]
    });
  }


  ngOnInit(): void {

    this._profileService.getProfile().subscribe(data => {
      this.profile = data.data
      this.initForm()
    })

  }

  initForm(){

    this.profileForm.patchValue({
      username: this.user.username,
      firstName :this.profile.firstName,
      lastName :this.profile.lastName,
      email: this.user.email
    });


  }

  onSubmit() {

    if (!this.isInputDisabled) {
      const formData = new FormData();

      const username = this.profileForm.get('username')?.value;
      const firstName = this.profileForm.get('firstName')?.value;
      const lastName = this.profileForm.get('lastName')?.value;
      const email = this.profileForm.get('email')?.value;

      if (username && firstName && lastName && email) {
        formData.append('username', username);
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);

        // Append the image file if available
        if (this.image) {
          formData.append('profileImage', this.image);
        }

        // Call your service method to update the profile
        this._profileService.updateProfile(formData).subscribe(
          (data) => {
            this._toast.success('Profile updated successfully');
            this.profile = data.data;
            this.initForm();
          }
        );
      }
    }

  }

  changePhoto(event: any) {
   const file = event.target.files[0]
   this.image = file
  }

  cancel() {
    this.initForm()
    this.profileForm.disable()
  }


  changeToEdit(){
    this.profileForm.enable()
    this.isInputDisabled = !this.isInputDisabled
  }



}
