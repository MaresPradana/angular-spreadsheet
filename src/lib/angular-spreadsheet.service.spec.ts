import { TestBed } from '@angular/core/testing';

import { AngularSpreadsheetService } from './angular-spreadsheet.service';

describe('AngularSpreadsheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularSpreadsheetService = TestBed.get(AngularSpreadsheetService);
    expect(service).toBeTruthy();
  });
});
