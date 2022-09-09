import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescToIncComponent } from './desc-to-inc.component';

describe('DescToIncComponent', () => {
  let component: DescToIncComponent;
  let fixture: ComponentFixture<DescToIncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescToIncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescToIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
