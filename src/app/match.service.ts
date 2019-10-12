import { Injectable } from "@angular/core";
import * as uuid from "uuid";
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class MatchService {
  constructor(private db: AngularFireDatabase, private router: Router) {}

  createMatch(data) {
    var matchId = uuid.v4();

    const itemRef = this.db.object("match/" + matchId);

    const promise = itemRef.set({
      teamId: matchId,
      matchNo: data.matchNo,
      noOfOvers: data.noOfOvers,
      ballsPerOver: data.ballsPerOver,
      team1TeamId: data.team1Id,
      team2TeamId: data.team2Id,
      team1TeamName: data.team1Name,
      team2TeamName: data.team2Name,
      matchType: data.matchType,
      pitch: 0
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
}