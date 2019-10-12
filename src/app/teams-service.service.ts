import { Injectable } from "@angular/core";
import * as uuid from "uuid";
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class TeamsServiceService {
  constructor(private db: AngularFireDatabase, private router: Router) {}

  addNewTeam(data) {
    var teamId = uuid.v4();

    const itemRef = this.db.object("teams/" + teamId);
    const promise = itemRef.set({
      teamId: teamId,
      teamName: data.teamName,
      teamCompany: data.company,
      noOfPlayers: data.noOfPlayers
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

  getAllTeams(){
    return this.db.list('teams').valueChanges();
  }
}
