import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservalComponent } from './observal.component';

describe('ObservalComponent', () => {
  let component: ObservalComponent;
  let fixture: ComponentFixture<ObservalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
