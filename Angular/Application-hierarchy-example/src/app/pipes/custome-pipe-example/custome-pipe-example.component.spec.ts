import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomePipeExampleComponent } from './custome-pipe-example.component';

describe('CustomePipeExampleComponent', () => {
  let component: CustomePipeExampleComponent;
  let fixture: ComponentFixture<CustomePipeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomePipeExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomePipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
