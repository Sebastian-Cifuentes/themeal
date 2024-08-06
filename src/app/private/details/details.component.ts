import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/** Interfaces */
import { Meal } from '../../interfaces/meal.interface';

/** Services */
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  meal!: Meal;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.meal = this.router.getCurrentNavigation()!.extras.state as Meal;
  }

  returnToHome() {
    this.router.navigateByUrl('index');
  }


}
