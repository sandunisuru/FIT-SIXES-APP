import { Component, OnInit } from '@angular/core';
import { MatchService } from "../../match.service";

@Component({
  selector: 'app-mark-score',
  templateUrl: './mark-score.component.html',
  styleUrls: ['./mark-score.component.css']
})
export class MarkScoreComponent implements OnInit {

  matchId: any;
  inning: any;
  team1: "";
  team2: "";
  type: "";
  inningNo: any;
  matchArray: any;
  constructor(private match: MatchService) {
    this.matchId = localStorage.getItem("matchId").toString();
    this.inning = localStorage.getItem("inning").toString();

    this.match.getMatch(this.matchId).subscribe(data => {

      this.matchArray = data[0];
      this.team1 = this.matchArray.team1TeamName;
      this.team2 = this.matchArray.team2TeamName;

      this.type = this.matchArray.matchType;

      this.inningNo = ((this.inning == "Inning1")?"1st Inning":"2nd Inning");

    })

   }

  ngOnInit() {
    
    
  }

}
