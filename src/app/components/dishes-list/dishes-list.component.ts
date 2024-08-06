import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.scss'],
})
export class DishesListComponent {

  constructor(
    private router: Router
  ) { }

  redirectToDetail() {
    this.router.navigateByUrl(`details/${123}`);
  }

}
