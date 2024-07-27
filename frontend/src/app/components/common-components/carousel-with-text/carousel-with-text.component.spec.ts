import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselWithTextComponent } from './carousel-with-text.component';

describe('CarouselWithTextComponent', () => {
  let component: CarouselWithTextComponent;
  let fixture: ComponentFixture<CarouselWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselWithTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
