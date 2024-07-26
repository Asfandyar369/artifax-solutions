import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedDesignServicesComponent } from './customized-design-services.component';

describe('CustomizedDesignServicesComponent', () => {
  let component: CustomizedDesignServicesComponent;
  let fixture: ComponentFixture<CustomizedDesignServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizedDesignServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedDesignServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
