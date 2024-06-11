import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialProfileCardComponent } from './components/social-profile-card/social-profile-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SocialProfileCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'solcial-links-profile';
}
