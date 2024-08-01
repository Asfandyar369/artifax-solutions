import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyDesignersComponent } from './verify-designers.component';

describe('VerifyDesignersComponent', () => {
  let component: VerifyDesignersComponent;
  let fixture: ComponentFixture<VerifyDesignersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyDesignersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyDesignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
