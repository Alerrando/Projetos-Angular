import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySvgEmptyComponent } from './my-svg-empty.component';

describe('MySvgEmptyComponent', () => {
  let component: MySvgEmptyComponent;
  let fixture: ComponentFixture<MySvgEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MySvgEmptyComponent]
    });
    fixture = TestBed.createComponent(MySvgEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
