import { Component } from '@angular/core';
import { DeveloperCard } from './developer-card/developer-card';
import { UserHeader } from './user-header/user-header';

@Component({
  imports: [DeveloperCard, UserHeader],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {

}
