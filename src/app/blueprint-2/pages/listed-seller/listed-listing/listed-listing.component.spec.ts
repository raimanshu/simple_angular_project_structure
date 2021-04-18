import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedListingComponent } from './listed-listing.component';

describe('ListedListingComponent', () => {
  let component: ListedListingComponent;
  let fixture: ComponentFixture<ListedListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListedListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
