import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProfileCardComponent } from './social-profile-card.component';

describe('SocialProfileCardComponent', () => {
  let component: SocialProfileCardComponent;
  let fixture: ComponentFixture<SocialProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialProfileCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
