import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../../authentication/auth.service';
import { User } from '../../authentication/models/api.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{

  state = false;
  user: User | null = null
  isUser = false
  navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" }
  ];

  constructor(private _authService: AuthService, ) {}


    ngOnInit(): void {
     this._authService.isAuthenticatedUser().subscribe((data) => {
      this.isUser = data,
      console.log('test init navbar');

     })
     this._authService.getUserObservable().pipe(map(data => data)).subscribe(data => this.user = data)
    }


    signOut(){
      this._authService.signOutUser()

    }


  toggleClick(){
    console.log(this.state)
    this.state = !this.state
  }
}
