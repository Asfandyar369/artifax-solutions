import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedRealmsComponent } from './animated-realms.component';

describe('AnimatedRealmsComponent', () => {
  let component: AnimatedRealmsComponent;
  let fixture: ComponentFixture<AnimatedRealmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatedRealmsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedRealmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
