import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhanceChannelComponent } from './enhance-channel.component';

describe('EnhanceChannelComponent', () => {
  let component: EnhanceChannelComponent;
  let fixture: ComponentFixture<EnhanceChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhanceChannelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnhanceChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
