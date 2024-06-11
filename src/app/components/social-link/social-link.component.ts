import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [],
  template: /*html*/ ` <a href="#" class="social-link"> <ng-content /> </a> `,
  styles: /*css*/ `
    @use '../../../assets/styles/base/_variables.scss' as v;

    .social-link {
      background-color: v.$color-neutral-grey;
      display: flex;
      justify-content: center;
      padding: 1.2rem;
      border-radius: .8rem;
      font-weight: v.$font-weight-semibold;
      transition: all .2s ease;

      &:hover {
        background-color: v.$color-primary-green;
        color: v.$color-neutral-grey;
      }
    }
  `,
})
export class SocialLinkComponent {
  link = input.required<string>();
}
