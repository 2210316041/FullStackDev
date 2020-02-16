import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoolsComponent } from './fools.component';

describe('FoolsComponent', () => {
  let component: FoolsComponent;
  let fixture: ComponentFixture<FoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
