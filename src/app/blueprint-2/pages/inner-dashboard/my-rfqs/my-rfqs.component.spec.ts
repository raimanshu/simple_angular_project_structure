import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRfqsComponent } from './my-rfqs.component';

describe('MyRfqsComponent', () => {
  let component: MyRfqsComponent;
  let fixture: ComponentFixture<MyRfqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRfqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRfqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
