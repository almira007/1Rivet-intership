import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservalExampleComponent } from './observal-example.component';

describe('ObservalExampleComponent', () => {
  let component: ObservalExampleComponent;
  let fixture: ComponentFixture<ObservalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservalExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
