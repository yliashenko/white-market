import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUserDetails} from "../../models/users";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  users: IUserDetails[];

  constructor(private userService: UserService) {
  }

  getAllUsers() {
    this.userService
      .getAllUsers()
      .subscribe((data) => {
        this.users = data;
        console.log(this.users);
      });

    return this.users;
  }

  ngOnInit() {
    this.getAllUsers();
  }
}
