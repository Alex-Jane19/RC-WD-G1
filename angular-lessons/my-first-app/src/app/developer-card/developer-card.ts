import { Component } from '@angular/core';
import { ProfileDetails } from '../profile-details/profile-details';

@Component({
  imports: [ProfileDetails],
  selector: 'app-developer-card',
  styleUrl: './developer-card.css',
  templateUrl: './developer-card.html',
})
export class DeveloperCard {
    username = 'Oleksiy';
    role = 'Frontend Developer';
    avatarUrl = 'https://api.dicebear.com/9.x/initials/svg?seed=Oleksiy&backgroundColor=d4e9da&textColor=174d38';
    isOnline = true;
    skillsCount = 5;
    
    messageSent = false;

    sendMessage(): void {
    this.messageSent = true;
}
}
