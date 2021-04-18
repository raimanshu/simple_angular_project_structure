import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirpartFormComponent } from './airpart-form.component';

describe('AirpartFormComponent', () => {
  let component: AirpartFormComponent;
  let fixture: ComponentFixture<AirpartFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirpartFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirpartFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
