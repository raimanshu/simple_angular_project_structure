import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqsPageComponent } from './rfqs-page.component';

describe('RfqsPageComponent', () => {
  let component: RfqsPageComponent;
  let fixture: ComponentFixture<RfqsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfqsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RfqsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
