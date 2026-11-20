import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-user-header',
  styleUrl: './user-header.css',
  templateUrl: './user-header.html',
})
export class UserHeader {
  username = 'Oleksiy';
  role = 'Frontend Developer';
  avatarUrl = 'https://api.dicebear.com/9.x/initials/svg?seed=Oleksiy&backgroundColor=d4e9da&textColor=174d38';
  isLoggedIn = true;
}
