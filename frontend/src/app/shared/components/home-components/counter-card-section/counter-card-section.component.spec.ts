import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCardSectionComponent } from './counter-card-section.component';

describe('CounterCardSectionComponent', () => {
  let component: CounterCardSectionComponent;
  let fixture: ComponentFixture<CounterCardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterCardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterCardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
