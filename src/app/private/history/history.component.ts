import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Interfaces */
import { History } from '../../interfaces/history';

/** Services */
import { LocalstorageService } from '../../services/localstorage.service';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {

  history: History[] = [];

  constructor(
    private router: Router,
    private _localStorageService: LocalstorageService
  ) {

  }

  ionViewWillEnter() {
    this.setHistory();
  }
  
  setHistory() {
    this.history = this._localStorageService.getHistory();
  }

  setLastRegister(register: History) {
    this._localStorageService.setLastRegister(register);
    this.returnToHome();
  }

  returnToHome() {
    this.router.navigateByUrl('index');
  }

}
