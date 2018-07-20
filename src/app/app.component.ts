import { Component, OnInit } from '@angular/core';
import { User, UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent  implements OnInit  {
  title = 'Lazy Loading Demo';
  users: User[];


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().then(users => this.users = users);
  }
}

