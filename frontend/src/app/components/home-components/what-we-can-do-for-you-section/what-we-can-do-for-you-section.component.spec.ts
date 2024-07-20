import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeCanDoForYouSectionComponent } from './what-we-can-do-for-you-section.component';

describe('WhatWeCanDoForYouSectionComponent', () => {
  let component: WhatWeCanDoForYouSectionComponent;
  let fixture: ComponentFixture<WhatWeCanDoForYouSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeCanDoForYouSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeCanDoForYouSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
