import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'index',
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule)
      },
      {
        path: 'details/:id',
        loadChildren: () => import('./details/details.module').then( m => m.DetailsModule)
      },
      {
        path: 'history',
        loadChildren: () => import('./history/history.module').then( m => m.HistoryModule)
      },
      {
        path: '**',
        redirectTo: 'index',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({ imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
