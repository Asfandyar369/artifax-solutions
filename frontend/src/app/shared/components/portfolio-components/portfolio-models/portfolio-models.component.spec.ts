import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioModelsComponent } from './portfolio-models.component';

describe('PortfolioModelsComponent', () => {
  let component: PortfolioModelsComponent;
  let fixture: ComponentFixture<PortfolioModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
