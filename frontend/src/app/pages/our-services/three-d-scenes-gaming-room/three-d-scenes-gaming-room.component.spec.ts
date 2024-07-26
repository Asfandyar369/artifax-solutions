import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDScenesGamingRoomComponent } from './three-d-scenes-gaming-room.component';

describe('ThreeDScenesGamingRoomComponent', () => {
  let component: ThreeDScenesGamingRoomComponent;
  let fixture: ComponentFixture<ThreeDScenesGamingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDScenesGamingRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDScenesGamingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
