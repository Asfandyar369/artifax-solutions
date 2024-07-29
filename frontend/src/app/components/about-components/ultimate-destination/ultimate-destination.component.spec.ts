import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimateDestinationComponent } from './ultimate-destination.component';

describe('UltimateDestinationComponent', () => {
  let component: UltimateDestinationComponent;
  let fixture: ComponentFixture<UltimateDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltimateDestinationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimateDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
