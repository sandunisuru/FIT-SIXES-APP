import { Injectable } from '@angular/core';
import * as uuid from "uuid";
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private db: AngularFireDatabase, private router: Router) { }


  createMatch(data){
    var matchId = uuid.v4();

    const itemRef = this.db.object("match/" + matchId);

    const promise = itemRef.set({
      teamId: matchId,
      matchNo: data.matchNo,
      noOfOvers: data.noOfOvers,
      ballsPerOver: data.ballsPerOver,
      battingTeamId: data.battingTeamId,
      ballingTeamId: data.ballingTeamId,
      battingTeamName: data.battingTeamName,
      ballingTeamName: data.ballingTeamName,
      matchType: data.matchType
    });

    return promise
    .then(_ => {

      this.router.navigate(["/"]);
      return {
        status : 200,
        message: "Team Added Successfully!"
      };
    })
    .catch(err => {
      
      return {
        status : 500,
        message: err
      };
    });

  }
}
