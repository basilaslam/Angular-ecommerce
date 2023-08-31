import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/core/authentication/models/api.model';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent{
  @Output() signout = new EventEmitter()
  @Input() user!:User


  signOut(){
    this.signout.emit()
  }

  toggleAvatar(userDropdown: HTMLDivElement){
    userDropdown.classList.toggle('hidden')
  }


}
