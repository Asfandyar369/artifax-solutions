import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBannerShowcaseComponent } from './portfolio-banner-showcase.component';

describe('PortfolioBannerShowcaseComponent', () => {
  let component: PortfolioBannerShowcaseComponent;
  let fixture: ComponentFixture<PortfolioBannerShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioBannerShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioBannerShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
