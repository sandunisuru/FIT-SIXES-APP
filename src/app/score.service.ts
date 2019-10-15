import { Injectable } from '@angular/core';
import * as uuid from "uuid";
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private db: AngularFireDatabase, private router: Router) { }


  submitBall(data){

    let scoreforBall = 0;
    let legit = true;
    let wicket = 0;
    let ball = 1;

    if(data.ball === "W"){
      scoreforBall = 0
      wicket = 1;
    }
    else if(data.ball === "WD"){
      scoreforBall = 1
      legit = false;
      ball = 0;
    }
    else if(data.ball === "NB"){
      scoreforBall = 1
      legit = false;
      ball = 0;
    }
    else{
      scoreforBall = parseInt(data.ball);
    }

    const itemRef = this.db.object("match/" + data.matchId + "/" + data.inning + "/balls/" + data.ballNo);

    itemRef.set({
      type: data.ball,
      score: scoreforBall,
      legit: legit
    });

    const scoreUpdateRef = this.db.object("match/" + data.matchId + "/" + data.inning);

    scoreUpdateRef.update({ totalScore:  data.currentScore + scoreforBall, wickets: data.currentWicket + wicket, numberOfBallsLeft: data.currentRemainigBalls - ball})

  }

}
