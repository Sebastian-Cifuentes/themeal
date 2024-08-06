import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [DishesListComponent, LoadingComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    DishesListComponent,
    LoadingComponent
  ]
})
export class ComponentsModule { }
