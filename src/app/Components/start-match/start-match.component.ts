import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatchService } from "../../match.service";

@Component({
  selector: "app-start-match",
  templateUrl: "./start-match.component.html",
  styleUrls: ["./start-match.component.css"]
})
export class StartMatchComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  notCompletedMatches = [];
  playingTeams = [];
  selectedMatch = 0;
  inning = "";
  pitch = "";
  battingTeamId = "";
  ballingTeamId = "";
  battingTeamName = this.searchArray(this.battingTeamId);
  ballingTeamName = this.searchArray(this.ballingTeamId);

  constructor(private match: MatchService, private _formBuilder: FormBuilder) {}

  getPitch(selectedTeam) {
    for (var i = 0; i < this.notCompletedMatches.length; i++) {
      if (this.notCompletedMatches[i].matchNo === selectedTeam) {
        if (this.notCompletedMatches[i].pitch == "1") {
          return "pitch1";
        } else if (this.notCompletedMatches[i].pitch == "2") {
          return "pitch2";
        } else if (this.notCompletedMatches[i].pitch == "3") {
          return "pitch3";
        } else if (this.notCompletedMatches[i].pitch == "4") {
          return "pitch4";
        } else {
          return "none";
        }
      }
    }
  }

  startMatch(){

    let matchId = this.getMatchId(this.selectedMatch);

    let data = {
      matchId : matchId,
      matchNo : this.selectedMatch,
      inning : this.inning,
      battingTeamId: this.battingTeamId,
      battingTeamName: this.searchArray(this.battingTeamId),
      ballingTeamId: this.ballingTeamId,
      ballingTeamName: this.searchArray(this.ballingTeamId),
      pitch: this.pitch
    }

    this.match.startNewMatch(data);


  }

  getMatchId(selectedMatch){
    for (var i = 0; i < this.notCompletedMatches.length; i++) {
      if (this.notCompletedMatches[i].matchNo === selectedMatch) {
        return this.notCompletedMatches[i].matchId;
      }
    }

  }

  getCompletedInning(selectedTeam) {
    for (var i = 0; i < this.notCompletedMatches.length; i++) {
      if (this.notCompletedMatches[i].matchNo === selectedTeam) {

        let team1 = {
          teamId : this.notCompletedMatches[i].team1TeamId,
          teamName : this.notCompletedMatches[i].team1TeamName
        }

        let team2 = {
          teamId : this.notCompletedMatches[i].team2TeamId,
          teamName : this.notCompletedMatches[i].team2TeamName
        }

        this.playingTeams.push(team1);
        this.playingTeams.push(team2);

        if (this.notCompletedMatches[i].hasOwnProperty('Inning1')) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  ngOnInit() {
    this.match.getNotCompletedMatches().subscribe(matches => {
      this.notCompletedMatches = matches;
      this.pitch = this.getPitch(this.selectedMatch);
      if (this.getCompletedInning(this.selectedMatch)) {
        this.inning = "Inning2";
      }
      else{
        this.inning = "Inning1";
      }
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }

  searchArray(id) {
    for (var i = 0; i < this.playingTeams.length; i++) {
      if (this.playingTeams[i].teamId === id) {
        return (
          this.playingTeams[i].teamName
        );
      }
    }
  }
}
