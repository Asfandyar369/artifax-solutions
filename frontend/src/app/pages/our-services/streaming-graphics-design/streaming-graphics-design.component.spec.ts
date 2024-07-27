import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingGraphicsDesignComponent } from './streaming-graphics-design.component';

describe('StreamingGraphicsDesignComponent', () => {
  let component: StreamingGraphicsDesignComponent;
  let fixture: ComponentFixture<StreamingGraphicsDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamingGraphicsDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamingGraphicsDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
