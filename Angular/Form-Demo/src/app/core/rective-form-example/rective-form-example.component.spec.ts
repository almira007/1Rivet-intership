import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectiveFormExampleComponent } from './rective-form-example.component';

describe('RectiveFormExampleComponent', () => {
  let component: RectiveFormExampleComponent;
  let fixture: ComponentFixture<RectiveFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectiveFormExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectiveFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
