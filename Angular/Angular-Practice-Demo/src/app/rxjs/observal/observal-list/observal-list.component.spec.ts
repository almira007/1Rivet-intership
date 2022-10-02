import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservalListComponent } from './observal-list.component';

describe('ObservalListComponent', () => {
  let component: ObservalListComponent;
  let fixture: ComponentFixture<ObservalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservalListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
