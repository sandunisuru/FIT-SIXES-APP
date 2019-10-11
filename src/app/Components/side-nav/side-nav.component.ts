import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.css"]
})
export class SideNavComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MatSidenav;

  reason = "";

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor() {}

  ngOnInit() {}
}
