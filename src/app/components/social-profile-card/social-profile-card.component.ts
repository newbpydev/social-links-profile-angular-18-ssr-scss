import { Component } from '@angular/core';
import { SocialLinkComponent } from '../social-link/social-link.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-social-profile-card',
  standalone: true,
  imports: [SocialLinkComponent, NgOptimizedImage],
  templateUrl: './social-profile-card.component.html',
  styleUrl: './social-profile-card.component.scss',
})
export class SocialProfileCardComponent {}
