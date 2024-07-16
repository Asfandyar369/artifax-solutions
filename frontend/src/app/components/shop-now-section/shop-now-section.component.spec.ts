import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNowSectionComponent } from './shop-now-section.component';

describe('ShopNowSectionComponent', () => {
  let component: ShopNowSectionComponent;
  let fixture: ComponentFixture<ShopNowSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopNowSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopNowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
