import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildStreamSectionComponent } from './build-stream-section.component';

describe('BuildStreamSectionComponent', () => {
  let component: BuildStreamSectionComponent;
  let fixture: ComponentFixture<BuildStreamSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildStreamSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildStreamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
