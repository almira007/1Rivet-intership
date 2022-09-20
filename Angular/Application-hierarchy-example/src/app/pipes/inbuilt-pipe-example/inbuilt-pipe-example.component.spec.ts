import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltPipeExampleComponent } from './inbuilt-pipe-example.component';

describe('InbuiltPipeExampleComponent', () => {
  let component: InbuiltPipeExampleComponent;
  let fixture: ComponentFixture<InbuiltPipeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbuiltPipeExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InbuiltPipeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
