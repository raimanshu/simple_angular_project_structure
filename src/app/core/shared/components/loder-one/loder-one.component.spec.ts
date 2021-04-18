import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoderOneComponent } from './loder-one.component';

describe('LoderOneComponent', () => {
  let component: LoderOneComponent;
  let fixture: ComponentFixture<LoderOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoderOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoderOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
