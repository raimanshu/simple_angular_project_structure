import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftInformationComponent } from './aircraft-information.component';

describe('AircraftInformationComponent', () => {
  let component: AircraftInformationComponent;
  let fixture: ComponentFixture<AircraftInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
