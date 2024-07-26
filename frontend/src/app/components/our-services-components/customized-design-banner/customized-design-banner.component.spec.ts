import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedDesignBannerComponent } from './customized-design-banner.component';

describe('CustomizedDesignBannerComponent', () => {
  let component: CustomizedDesignBannerComponent;
  let fixture: ComponentFixture<CustomizedDesignBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizedDesignBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedDesignBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
