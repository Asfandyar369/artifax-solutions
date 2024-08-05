import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBannerComponent } from './portfolio-banner.component';

describe('PortfolioBannerComponent', () => {
  let component: PortfolioBannerComponent;
  let fixture: ComponentFixture<PortfolioBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
