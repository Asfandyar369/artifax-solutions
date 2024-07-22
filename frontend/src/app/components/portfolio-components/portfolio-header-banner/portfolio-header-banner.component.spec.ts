import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeaderBannerComponent } from './portfolio-header-banner.component';

describe('PortfolioHeaderBannerComponent', () => {
  let component: PortfolioHeaderBannerComponent;
  let fixture: ComponentFixture<PortfolioHeaderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioHeaderBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioHeaderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
