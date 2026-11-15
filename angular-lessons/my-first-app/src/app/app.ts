import { Component } from '@angular/core';
import { UserProfile } from './user-profile/user-profile';

@Component({
  imports: [UserProfile],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {

}
