import { Component, OnInit } from '@angular/core';

/** Services */
import { DataService } from '../../services/data.service';

/** Interfaces */
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  categories!: Category[];

  constructor(
    private _dataService: DataService
  ) { }

  async ngOnInit() {
    await this.getCategories();
  }

  async getCategories() {
    const { categories } = await this._dataService.getCategories();
    this.categories = categories;
  }
}
