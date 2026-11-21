import { Component } from '@angular/core';
import { DeveloperCard } from './developer-card/developer-card';
import { UserHeader } from './user-header/user-header';
import { OrderTracker } from './order-tracker/order-tracker';

@Component({
  imports: [DeveloperCard, UserHeader, OrderTracker],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {

}
