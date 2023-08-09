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
  user!: User
  isUser = false
  navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" }
  ];

  constructor(private _authService: AuthService, ) {}


    ngOnInit(): void {
     this.isUser = this._authService.isAuthenticatedUser()
     this._authService.getUser().pipe(map(data => data.data)).subscribe(data => this.user = data)

     console.log(this.user)

    }


    signOut(){
      this._authService.signOutUser()

    }


  toggleClick(){
    console.log(this.state)
    this.state = !this.state
  }
}
