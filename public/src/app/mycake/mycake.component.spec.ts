import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycakeComponent } from './mycake.component';

describe('MycakeComponent', () => {
  let component: MycakeComponent;
  let fixture: ComponentFixture<MycakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
