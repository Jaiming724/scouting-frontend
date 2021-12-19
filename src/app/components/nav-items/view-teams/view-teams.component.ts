import {Component, OnInit} from '@angular/core';
import {Team} from "../../../Team";
import {TeamService} from "../../../services/team.service";
import {DataSource} from "@angular/cdk/collections";
import {Observable, Subscription} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ViewTeamDialogComponent} from "../view-team-dialog/view-team-dialog.component";


@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css']
})
export class ViewTeamsComponent implements OnInit {
  displayedColumns: string[] = ['Team-Number', 'Team-Name', 'Total'];
  teams!: Team[]
  dataSource = new UserDataSource(this.teamService);
  subscription!: Subscription;

  constructor(private teamService: TeamService, private matDialog: MatDialog) {
    this.subscription = teamService.getTeamList().subscribe((teams) => {
      this.teams = teams;
    })
  }

  ngOnInit(): void {
  }

  public displayTeam(team: Team) {
    console.log(team)
    let dialogRef = this.matDialog.open(ViewTeamDialogComponent, {data: team})
    dialogRef.afterClosed().subscribe((str: Task) => {
      console.log(str)
    })
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private teamService: TeamService) {
    super();
  }

  connect(): Observable<Team[]> {
    return this.teamService.getTeamList();
  }

  disconnect() {
  }
}
