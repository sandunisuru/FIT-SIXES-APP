import { Injectable } from "@angular/core";
import * as uuid from "uuid";
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MatchService {
  noOfOvers = 0;
  ballsPerOver = 0;
  private subscription: Subscription;
  constructor(private db: AngularFireDatabase, private router: Router) {}

  createMatch(data) {
    var matchId = uuid.v4();

    const itemRef = this.db.object("match/" + matchId);

    const promise = itemRef.set({
      matchId: matchId,
      matchNo: data.matchNo,
      noOfOvers: data.noOfOvers,
      ballsPerOver: data.ballsPerOver,
      team1TeamId: data.team1Id,
      team2TeamId: data.team2Id,
      team1TeamName: data.team1Name,
      team2TeamName: data.team2Name,
      matchType: data.matchType,
      pitch: 0,
      status: "notstarted"
    });

    return promise
      .then(_ => {
        this.router.navigate(["/"]);
        return {
          status: 200,
          message: "Team Added Successfully!"
        };
      })
      .catch(err => {
        return {
          status: 500,
          message: err
        };
      });
  }

  getNotCompletedMatches() {
    return this.db
      .list("match", ref => ref.orderByChild("status").startAt("notstarted"))
      .valueChanges();
  }

  getCurrentMatch(matchId, callback) {
    const itemRef = this.db.object("match/" + matchId);
    
    this.subscription = itemRef.valueChanges().subscribe(result => {

      console.log(result["noOfOvers"])
      this.noOfOvers = result["noOfOvers"];
      this.ballsPerOver = result["ballsPerOver"];
      this.subscription.unsubscribe();
      callback();
    });

    
  }

  startNewMatch(data) {
    let matchId = data.matchId;

    const itemRef = this.db.object("match/" + matchId);

    this.getCurrentMatch(matchId, () => {
      itemRef.update({ status: "notstarted ongoing", pitch: data.pitch });

      if (data.inning === "Inning1") {
        let inningRef = this.db.object("match/" + matchId + "/Inning1");

        inningRef.set({
          totalScore: 0,
          numberOfBallsLeft: this.noOfOvers * this.ballsPerOver,
          battingTeamId: data.battingTeamId,
          battingTeamName: data.battingTeamName,
          ballingTeamId: data.ballingTeamId,
          ballingTeamName: data.ballingTeamName,
          wickets: 0
        });
        console.log(data);
      } else if (data.inning === "Inning2") {
        let inningRef = this.db.object("match/" + matchId + "/Inning2");

        inningRef.set({
          totalScore: 0,
          numberOfBallsLeft: this.noOfOvers * this.ballsPerOver,
          battingTeamId: data.battingTeamId,
          battingTeamName: data.battingTeamName,
          ballingTeamId: data.ballingTeamId,
          ballingTeamName: data.ballingTeamName,
          wickets: 0
        });
        console.log(data);
      }
    });
  }
}
