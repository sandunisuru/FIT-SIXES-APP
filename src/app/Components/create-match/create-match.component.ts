import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TeamsServiceService } from "../../teams-service.service";
import { MatchService } from "../../match.service";

@Component({
  selector: "app-create-match",
  templateUrl: "./create-match.component.html",
  styleUrls: ["./create-match.component.css"]
})
export class CreateMatchComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  matchNo = 0;
  noOfOvers = 5;
  ballsPerOver = 6;
  playingTeams = [];
  team1 = "";
  team2 = "";
  matchType = "";

  constructor(
    private _formBuilder: FormBuilder,
    private teams: TeamsServiceService,
    private match: MatchService
  ) {}

  ngOnInit() {
    this.teams.getAllTeams().subscribe(teams => {
      this.playingTeams = teams;
      console.log(teams);
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }

  onSubmit() {
    let data = {
      matchNo: this.matchNo,
      noOfOvers: this.noOfOvers,
      ballsPerOver: this.ballsPerOver,
      team1Id: this.team1,
      team2Id: this.team2,
      team1Name: this.searchArray(this.team1),
      team2Name: this.searchArray(this.team2),
      matchType: this.matchType
    };

    this.match.createMatch(data);
  }

  searchArray(id) {
    for (var i = 0; i < this.playingTeams.length; i++) {
      if (this.playingTeams[i].teamId === id) {
        return (
          this.playingTeams[i].teamName +
          " - " +
          this.playingTeams[i].teamCompany
        );
      }
    }
  }
}
