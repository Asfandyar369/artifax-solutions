import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesHeaderBannerComponent } from './our-services-header-banner.component';

describe('OurServicesHeaderBannerComponent', () => {
  let component: OurServicesHeaderBannerComponent;
  let fixture: ComponentFixture<OurServicesHeaderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurServicesHeaderBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesHeaderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
