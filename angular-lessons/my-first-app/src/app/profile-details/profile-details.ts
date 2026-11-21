import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-profile-details',
  styleUrl: './profile-details.css',
  templateUrl: './profile-details.html',
})
export class ProfileDetails {
  showDetails = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
