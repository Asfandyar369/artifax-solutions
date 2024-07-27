import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtuberModelComponent } from './vtuber-model.component';

describe('VtuberModelComponent', () => {
  let component: VtuberModelComponent;
  let fixture: ComponentFixture<VtuberModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VtuberModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VtuberModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
