import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';

/** Services */
import { DataService } from '../../services/data.service';
import { LocalstorageService } from '../../services/localstorage.service';

/** Interfaces */
import { Category } from '../../interfaces/category.interface';
import { Meal } from '../../interfaces/meal.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit, OnDestroy {

  destroy = new Subject<boolean>;
  categories!: Category[];
  meals: Meal[] = [];
  form!: FormGroup;
  loading = false;

  get nameControl(): AbstractControl {
    return this.form.get('name')!;
  }

  get categoryControl(): AbstractControl {
    return this.form.get('category')!;
  }

  constructor(
    private _dataService: DataService,
    private _localStorageService: LocalstorageService
  ) {}

  async ngOnInit() {
    this.initForm();
    this.setupSubscriptions();
    await this.getCategories();
  }
  
  ionViewWillEnter() {
    this.searchByLastFilter();
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      category: new FormControl('')
    });
  }

  setupSubscriptions(): void {
    // Watch for changes on nameControl
    this.nameControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy)
      )
      .subscribe(async(value) => {
        if (value) {
          this.categoryControl.reset();
          await this.searchByName();
          this._localStorageService.setLastRegister({value, filterBy: 'name'});
        }
      });

    // Watch for changes on categoryControl
    this.categoryControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.destroy)
      )
      .subscribe(async(value) => {
        if (value) {
          this.nameControl.reset();
          await this.searchByCategory();
          this._localStorageService.setLastRegister({value, filterBy: 'category'});
        }
      });
  }

  private searchByLastFilter() {
    const lastFilter = this._localStorageService.getLastRegister();
    if (!lastFilter) {
      return;
    }
    const typeOfFilter: any = {
      category: this.categoryControl,
      name: this.nameControl,
    }
    typeOfFilter[lastFilter.filterBy].patchValue(lastFilter.value);
  }

  async getCategories() {
    const { categories } = await this._dataService.getCategories();
    this.categories = categories;
  }

  async searchByName() {
    this.loading = true;
    const { meals } = await this._dataService.searchByName(this.nameControl.value);
    this.meals = meals || [];
    this.loading = false;
  }
  
  async searchByCategory() {
    this.loading = true;
    const { meals } = await this._dataService.searchByCategory(this.categoryControl.value);
    this.meals = meals || [];
    this.loading = false;
  }
}
