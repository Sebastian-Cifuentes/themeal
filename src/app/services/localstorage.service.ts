import { Injectable } from '@angular/core';

import { History } from '../interfaces/history';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  /** Get history from localStorage */
  getHistory(): History[] {
    return JSON.parse(localStorage.getItem('history')!) as History[] || [];
  }

  /**
   * Set history to localStorage
   * @param register to add to history
   */
  setHistory(register: History): void {
    const history = this.getHistory();
    if (history.some(h => h.filterBy === register.filterBy) && history.some(h => h.value === register.value)) {
      return;
    }
    history.push(register);
    localStorage.setItem('history', JSON.stringify(history));
  }

  /** Get last value register from localStorage */
  getLastRegister(): History {
    return JSON.parse(localStorage.getItem('lastregister')!) as History || null;
  }

  /**
   * Set last value register in localStorage
   * @param register to change in localstorage
   */
  setLastRegister(register: History): void {
    localStorage.setItem('lastregister', JSON.stringify(register));
  }


}
