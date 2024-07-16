import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingCreativitySectionComponent } from './streaming-creativity-section.component';

describe('StreamingCreativitySectionComponent', () => {
  let component: StreamingCreativitySectionComponent;
  let fixture: ComponentFixture<StreamingCreativitySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamingCreativitySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamingCreativitySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
