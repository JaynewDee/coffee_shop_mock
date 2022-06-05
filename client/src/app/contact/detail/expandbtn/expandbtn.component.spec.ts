import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandbtnComponent } from './expandbtn.component';

describe('ExpandbtnComponent', () => {
  let component: ExpandbtnComponent;
  let fixture: ComponentFixture<ExpandbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
