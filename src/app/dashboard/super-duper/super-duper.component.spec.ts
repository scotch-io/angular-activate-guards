import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDuperComponent } from './super-duper.component';

describe('SuperDuperComponent', () => {
  let component: SuperDuperComponent;
  let fixture: ComponentFixture<SuperDuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperDuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperDuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
