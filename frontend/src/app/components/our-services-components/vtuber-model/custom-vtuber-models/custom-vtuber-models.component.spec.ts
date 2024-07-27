import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVtuberModelsComponent } from './custom-vtuber-models.component';

describe('CustomVtuberModelsComponent', () => {
  let component: CustomVtuberModelsComponent;
  let fixture: ComponentFixture<CustomVtuberModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomVtuberModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomVtuberModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
