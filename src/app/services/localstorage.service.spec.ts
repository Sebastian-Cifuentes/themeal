import { TestBed } from '@angular/core/testing';

import { LocalstorageService } from './localstorage.service';

describe('LocalstorageService', () => {
  let service: LocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be pushed a register to history in localStorage', () => {
    const register = {value: 'corba', filterBy: 'name'};
    service.setHistory(register);
    expect(service.getHistory().length).toBeGreaterThanOrEqual(1);
    expect(service.getHistory()[0].value).toEqual(register.value);
  });

  it('should be pushed a register as last register in localStorage', () => {
    const register = {value: 'corba', filterBy: 'name'};
    service.setLastRegister(register);
    expect(service.getLastRegister).toBeTruthy();
    expect(service.getLastRegister().filterBy).toEqual(register.filterBy);
  });

});
