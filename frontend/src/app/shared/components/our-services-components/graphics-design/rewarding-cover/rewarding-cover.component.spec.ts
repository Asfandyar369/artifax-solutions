import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardingCoverComponent } from './rewarding-cover.component';

describe('RewardingCoverComponent', () => {
  let component: RewardingCoverComponent;
  let fixture: ComponentFixture<RewardingCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardingCoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardingCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
