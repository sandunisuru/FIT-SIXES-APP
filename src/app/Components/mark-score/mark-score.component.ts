import { Component, OnInit } from '@angular/core';
import { MatchService } from "../../match.service";
import { ScoreService } from "../../score.service";

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
  selectedValue: any;
  total: any;
  wickets: any;
  ballNo: 0;
  allBalls: 0;
  showOvers: any;
  startNoOfBalls: 0;
  constructor(private match: MatchService, private score: ScoreService) {
    this.matchId = localStorage.getItem("matchId").toString();
    this.inning = localStorage.getItem("inning").toString();

    this.match.getMatch(this.matchId).subscribe(data => {

      this.matchArray = data[0];
      this.team1 = this.matchArray.team1TeamName;
      this.team2 = this.matchArray.team2TeamName;

      this.type = this.matchArray.matchType;

      this.inningNo = ((this.inning == "Inning1")?"1st Inning":"2nd Inning");

      this.total = this.matchArray[this.inning].totalScore;
      this.wickets = this.matchArray[this.inning].wickets;

      this.allBalls = this.matchArray[this.inning].numberOfBallsLeft;

      this.showOvers = Math.trunc((this.matchArray.noOfOvers*this.matchArray.ballsPerOver - this.allBalls)/this.matchArray.ballsPerOver) + "." + (this.matchArray.noOfOvers*this.matchArray.ballsPerOver - this.allBalls)%this.matchArray.ballsPerOver;
    })

   }

  ngOnInit() {
    
    this.ballNo = 0;
    
  }

  setValue(val){
    this.ballNo++;
    this.selectedValue = val;
  }

  submitBall(){
    

    var data = {
      matchId : this.matchId,
      inning : this.inning,
      ball: this.selectedValue,
      ballNo: this.ballNo,
      currentScore: this.total,
      currentWicket: this.wickets,
      currentRemainigBalls: this.allBalls
    };


    this.score.submitBall(data);
  }

}
