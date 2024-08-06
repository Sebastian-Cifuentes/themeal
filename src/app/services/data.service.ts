import { Injectable, Injector } from '@angular/core';
import { HttpParams } from '@angular/common/http';

/** Base */
import { ApiService } from './api-service.service';

/** Interface */
import { IDataService } from '../interfaces/data.interface';
import { Category } from '../interfaces/category.interface';
import { Meal } from '../interfaces/meal.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService extends ApiService implements IDataService {

  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  searchByName(name: string): Promise<{meals: Meal[]}> {
    const params = new HttpParams()
      .set('s', name);

    return this.get('search.php', { params });
  }

  searchByCategory(category: string): Promise<{meals: Meal[]}> {
    const params = new HttpParams()
      .set('c', category);

    return this.get('filter.php', { params });
  }

  getCategories(): Promise<{categories: Category[]}> {
    return this.get('categories.php');
  }

  
}
