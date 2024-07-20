import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioEmotesComponent } from './portfolio-emotes.component';

describe('PortfolioEmotesComponent', () => {
  let component: PortfolioEmotesComponent;
  let fixture: ComponentFixture<PortfolioEmotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioEmotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioEmotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
