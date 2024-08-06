import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptorsFromDi())
      ]
    });
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be returned data from API by a name research', async() => {
    const { meals } = await service.searchByName('corba');
    expect(meals.length).toBeGreaterThanOrEqual(1);
    expect(meals[0].strMeal).toEqual('Corba');
  });
  
  it('should be returned data from API by a category research', async() => {
    const { meals } = await service.searchByCategory('beef');
    expect(meals.length).toBeGreaterThanOrEqual(1);
    expect(meals[0].strMeal).toEqual('Beef and Mustard Pie');
  });

  it('should be returned all categories from API', async() => {
    const { categories } = await service.getCategories();
    expect(categories.length).toBeGreaterThanOrEqual(1);
    expect(categories[0].strCategory).toEqual('Beef');
  });

});
