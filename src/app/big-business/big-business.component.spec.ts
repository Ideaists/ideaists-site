import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBusinessComponent } from './big-business.component';

describe('BigBusinessComponent', () => {
  let component: BigBusinessComponent;
  let fixture: ComponentFixture<BigBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
