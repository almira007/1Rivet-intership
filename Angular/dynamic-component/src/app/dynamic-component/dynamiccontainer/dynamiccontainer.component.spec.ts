import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccontainerComponent } from './dynamiccontainer.component';

describe('DynamiccontainerComponent', () => {
  let component: DynamiccontainerComponent;
  let fixture: ComponentFixture<DynamiccontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamiccontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiccontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
