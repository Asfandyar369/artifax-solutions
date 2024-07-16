import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerStationSectionComponent } from './streamer-station-section.component';

describe('StreamerStationSectionComponent', () => {
  let component: StreamerStationSectionComponent;
  let fixture: ComponentFixture<StreamerStationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamerStationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamerStationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
