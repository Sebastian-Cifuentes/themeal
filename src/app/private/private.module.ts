import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

/** Routes */
import { PrivateRoutingModule } from './private-routing.module';

/** Components */
import { PrivateComponent } from './private.component';

@NgModule({
  declarations: [PrivateComponent],
  imports: [
    CommonModule,
    IonicModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
