import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDataViewComponent } from './items-data-view.component';

describe('ItemsDataViewComponent', () => {
  let component: ItemsDataViewComponent;
  let fixture: ComponentFixture<ItemsDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
