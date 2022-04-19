import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  bookride = false;

  book_ride() {
    this.bookride = true
  }
  constructor() { }

  ngOnInit() {
  }

}
