import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseHistroyComponent } from './purchase-histroy.component';

describe('PurchaseHistroyComponent', () => {
  let component: PurchaseHistroyComponent;
  let fixture: ComponentFixture<PurchaseHistroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseHistroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseHistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
