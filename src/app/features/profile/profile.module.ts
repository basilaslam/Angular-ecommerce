import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms'

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { EditProfileComponent } from './components/smart/edit-profile/edit-profile.component';
import { ShowProfileComponent } from './components/smart/show-profile/show-profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    ShowProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
