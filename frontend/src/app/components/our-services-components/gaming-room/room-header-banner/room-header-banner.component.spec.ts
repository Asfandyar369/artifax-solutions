import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHeaderBannerComponent } from './room-header-banner.component';

describe('RoomHeaderBannerComponent', () => {
  let component: RoomHeaderBannerComponent;
  let fixture: ComponentFixture<RoomHeaderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomHeaderBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomHeaderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
