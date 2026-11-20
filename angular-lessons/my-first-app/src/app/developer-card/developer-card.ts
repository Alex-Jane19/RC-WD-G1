import { Component } from '@angular/core';

@Component({
  imports: [],
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
}
