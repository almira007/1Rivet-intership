import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayExampleComponent } from './replay-example.component';

describe('ReplayExampleComponent', () => {
  let component: ReplayExampleComponent;
  let fixture: ComponentFixture<ReplayExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplayExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
