import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSpreadsheetComponent } from './angular-spreadsheet.component';

describe('AngularSpreadsheetComponent', () => {
  let component: AngularSpreadsheetComponent;
  let fixture: ComponentFixture<AngularSpreadsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularSpreadsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularSpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
