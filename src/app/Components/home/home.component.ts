import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  constructor() { }

  ngOnInit() {
  }

}
