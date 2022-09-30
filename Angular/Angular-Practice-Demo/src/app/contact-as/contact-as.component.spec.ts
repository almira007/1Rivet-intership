import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAsComponent } from './contact-as.component';

describe('ContactAsComponent', () => {
  let component: ContactAsComponent;
  let fixture: ComponentFixture<ContactAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
