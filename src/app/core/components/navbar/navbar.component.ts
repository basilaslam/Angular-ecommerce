import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { User } from '../../authentication/models/api.model';
import { map } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy{
  subs = new SubSink()
  state = false;
  user: User | null = null
  isUser = false
  navigation = [
    { title: "Products", path: "products/list-all" },
    { title: "About", path: "/about" }
  ];

  constructor(private _authService: AuthService, ) {}


    ngOnInit(): void {
     this.subs.add(this._authService.isAuthenticatedUser().subscribe((data) => {
      this.isUser = data
     }))
    this.subs.add(this._authService.getUserObservable().pipe(map(data => data)).subscribe(data => this.user = data))
    }


    signOut(){
      this._authService.signOutUser()

    }


  toggleClick(){
    this.state = !this.state
  }


  ngOnDestroy(){
    this.subs.unsubscribe()
  }
}
