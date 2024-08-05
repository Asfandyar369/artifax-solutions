import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeStreamsComponent } from './upgrade-streams.component';

describe('UpgradeStreamsComponent', () => {
  let component: UpgradeStreamsComponent;
  let fixture: ComponentFixture<UpgradeStreamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeStreamsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpgradeStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
