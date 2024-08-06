import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent {

  constructor(
    private router: Router
  ) { }

  redirectToHistory() {
    this.router.navigateByUrl('history');
  }

}
