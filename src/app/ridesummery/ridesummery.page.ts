import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ridesummery',
  templateUrl: './ridesummery.page.html',
  styleUrls: ['./ridesummery.page.scss'],
})
export class RidesummeryPage implements OnInit {

  switchTab = 'pick'

  segmentChanged(ev: any) {
    this.switchTab = ev.detail.value;
    console.log('Segment changed', ev);
  }


  constructor() { }

  ngOnInit() {
  }

}
