import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassNgstyleComponent } from './ngclass-ngstyle.component';

describe('NgclassNgstyleComponent', () => {
  let component: NgclassNgstyleComponent;
  let fixture: ComponentFixture<NgclassNgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgclassNgstyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgclassNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
