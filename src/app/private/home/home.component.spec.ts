import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

/** Components */
import { HomeComponent } from './home.component';

/** Services */
import { DataService } from '../../services/data.service';
import { LocalstorageService } from '../../services/localstorage.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dataService: DataService;
  let localStorageService: LocalstorageService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        provideHttpClient(withInterceptorsFromDi())
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dataService = TestBed.inject(DataService);
    localStorageService = TestBed.inject(LocalstorageService);
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be cleaned categoryControl when nameControl changes', () => {
    component.nameControl.setValue('testing');
    expect(component.categoryControl.value).toBe('');
  });

  it('should be cleaned nameControl when categoryControl changes', () => {
    component.categoryControl.setValue('testing');
    expect(component.nameControl.value).toBe('');
  });

  it('should be returned data from API by search of the name meal (done)', (done) => {
    const meals = {
        "meals": [
            {
                "idMeal": "52977",
                "strMeal": "Corba"
            }
        ]
    };
    spyOn(dataService, 'searchByName').and.returnValue(
      Promise.resolve(meals)
    );
    component.searchByName().then(() => {
      expect(component.meals[0].strMeal).toEqual(meals.meals[0].strMeal);
      done();
    })
  });

  it('should be returned data from API by search of the category meal (done)', (done) => {
    const meals = {
      "meals": [
          {
              "idMeal": "52977",
              "strMeal": "Beef and steak"
          }
      ]
    };
    spyOn(dataService, 'searchByCategory').and.returnValue(
      Promise.resolve(meals)
    );
    component.searchByCategory().then(() => {
      expect(component.meals[0].strMeal).toEqual(meals.meals[0].strMeal);
      done();
    })
  });

  it('should be changed filter if exists data on localStorage', () => {
    const register = {value: 'corba', filterBy: 'name'};
    const searchByName = spyOn(dataService, 'searchByName').and.callThrough();
    localStorageService.setLastRegister(register);
    component.searchByLastFilter();
    component.searchByName();
    expect(component.nameControl.value).toEqual(register.value);
    expect(searchByName).toHaveBeenCalled();
  });
});
