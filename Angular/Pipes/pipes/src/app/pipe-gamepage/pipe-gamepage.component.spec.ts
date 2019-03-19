import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeGamepageComponent } from './pipe-gamepage.component';

describe('PipeGamepageComponent', () => {
  let component: PipeGamepageComponent;
  let fixture: ComponentFixture<PipeGamepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeGamepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeGamepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
