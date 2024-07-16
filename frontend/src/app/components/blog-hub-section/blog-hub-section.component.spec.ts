import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHubSectionComponent } from './blog-hub-section.component';

describe('BlogHubSectionComponent', () => {
  let component: BlogHubSectionComponent;
  let fixture: ComponentFixture<BlogHubSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogHubSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogHubSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
