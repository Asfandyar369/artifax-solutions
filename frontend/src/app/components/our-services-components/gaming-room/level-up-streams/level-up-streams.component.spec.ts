import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelUpStreamsComponent } from './level-up-streams.component';

describe('LevelUpStreamsComponent', () => {
  let component: LevelUpStreamsComponent;
  let fixture: ComponentFixture<LevelUpStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LevelUpStreamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelUpStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
