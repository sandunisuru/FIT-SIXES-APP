import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TeamsServiceService } from '../../teams-service.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  selected: string;
  teamName = "";
  noMembers: any;

  constructor(private _formBuilder: FormBuilder, private teams: TeamsServiceService) { }

  

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSubmit(){
    var data = {
      teamName: this.teamName,
      company: this.selected,
      noOfPlayers: this.noMembers
    }

    let status = this.teams.addNewTeam(data);

    console.log(status)
  }

}
