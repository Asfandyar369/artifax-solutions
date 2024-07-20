import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPFPsComponent } from './portfolio-pfps.component';

describe('PortfolioPFPsComponent', () => {
  let component: PortfolioPFPsComponent;
  let fixture: ComponentFixture<PortfolioPFPsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPFPsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPFPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
