import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasAnimaisComponent } from './listas-animais.component';

describe('ListasAnimaisComponent', () => {
  let component: ListasAnimaisComponent;
  let fixture: ComponentFixture<ListasAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasAnimaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
