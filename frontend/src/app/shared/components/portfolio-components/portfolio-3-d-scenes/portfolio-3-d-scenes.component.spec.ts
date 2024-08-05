import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Portfolio3DScenesComponent } from './portfolio-3-d-scenes.component';

describe('Portfolio3DScenesComponent', () => {
  let component: Portfolio3DScenesComponent;
  let fixture: ComponentFixture<Portfolio3DScenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portfolio3DScenesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Portfolio3DScenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
