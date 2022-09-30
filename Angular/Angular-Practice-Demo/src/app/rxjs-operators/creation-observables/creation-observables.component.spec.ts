import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationObservablesComponent } from './creation-observables.component';

describe('CreationObservablesComponent', () => {
  let component: CreationObservablesComponent;
  let fixture: ComponentFixture<CreationObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationObservablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
