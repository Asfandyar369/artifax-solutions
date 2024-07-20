import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioStreampackComponent } from './portfolio-streampack.component';

describe('PortfolioStreampackComponent', () => {
  let component: PortfolioStreampackComponent;
  let fixture: ComponentFixture<PortfolioStreampackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioStreampackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioStreampackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
