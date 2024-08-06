import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { IonicModule } from '@ionic/angular';

import { PrivateComponent } from './private.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HistoryComponent } from './history/history.component';

describe('PrivateComponent', () => {
  let component: PrivateComponent;
  let fixture: ComponentFixture<PrivateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateComponent ],
      imports: [
        IonicModule.forRoot(),
        RouterModule.forRoot(
          [
            {path: 'index', component: HomeComponent},
            {path: 'details/:id', component: DetailsComponent},
            {path: 'history', component: HistoryComponent}
          ]
        )
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
