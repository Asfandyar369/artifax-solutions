import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleRatingsComponent } from './google-ratings.component';

describe('GoogleRatingsComponent', () => {
  let component: GoogleRatingsComponent;
  let fixture: ComponentFixture<GoogleRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleRatingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
