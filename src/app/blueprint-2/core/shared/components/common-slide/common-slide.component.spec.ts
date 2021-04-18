import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSlideComponent } from './common-slide.component';

describe('CommonSlideComponent', () => {
  let component: CommonSlideComponent;
  let fixture: ComponentFixture<CommonSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
