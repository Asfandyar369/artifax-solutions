import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquireSectionComponent } from './acquire-section.component';

describe('AcquireSectionComponent', () => {
  let component: AcquireSectionComponent;
  let fixture: ComponentFixture<AcquireSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcquireSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcquireSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
