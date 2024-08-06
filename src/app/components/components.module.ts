import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [DishesListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    DishesListComponent
  ]
})
export class ComponentsModule { }
