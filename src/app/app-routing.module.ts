import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Components/home/home.component';
import { CreateTeamComponent } from './Components/create-team/create-team.component';
import { CreateMatchComponent } from './Components/create-match/create-match.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add_team',
    component: CreateTeamComponent
  },
  {
    path: 'add_match',
    component: CreateMatchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
