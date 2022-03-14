import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCmComponent } from './chart-cm.component';

describe('ChartCmComponent', () => {
  let component: ChartCmComponent;
  let fixture: ComponentFixture<ChartCmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
