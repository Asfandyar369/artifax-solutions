import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualSpotlightComponent } from './virtual-spotlight.component';

describe('VirtualSpotlightComponent', () => {
  let component: VirtualSpotlightComponent;
  let fixture: ComponentFixture<VirtualSpotlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualSpotlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
