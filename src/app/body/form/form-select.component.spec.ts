import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSelectComponent } from './form-select.component';

describe('TitleSelectComponent', () => {
  let component: TitleSelectComponent;
  let fixture: ComponentFixture<TitleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
