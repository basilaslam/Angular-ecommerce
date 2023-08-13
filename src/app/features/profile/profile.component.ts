import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { User } from 'src/app/core/authentication/models/api.model';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy{

  user!: User | null
  subs = new SubSink()

  constructor(private _authService: AuthService){}

  ngOnInit(): void {
      this.subs.add(this._authService.getUserObservable().subscribe((data) => this.user = data))
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe()
  }

}
