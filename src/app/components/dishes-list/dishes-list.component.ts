import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Interfaces */
import { Meal } from '../../interfaces/meal.interface';

/** Services */
import { LocalstorageService } from '../../services/localstorage.service';


@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss'],
})
export class DishesListComponent{

  @Input({required: true})meals!: Meal[]

  constructor(
    private router: Router,
    private _localStorageService: LocalstorageService
  ) { }

  redirectToDetail(id: string) {
    this._localStorageService.setHistory(this._localStorageService.getLastRegister());
    this.router.navigateByUrl(`details/${id}`, {state: this.meals.find(d => d.idMeal === id)});
  }


}
