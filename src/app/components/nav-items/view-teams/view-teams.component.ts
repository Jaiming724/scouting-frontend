import {Component, OnInit} from '@angular/core';
import {Team} from "../../../Team";
import {TeamService} from "../../../services/team.service";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs";


@Component({
  selector: 'app-view-teams',
  templateUrl: './view-teams.component.html',
  styleUrls: ['./view-teams.component.css']
})
export class ViewTeamsComponent implements OnInit {
  displayedColumns: string[] = ['Team-Number', 'Team-Name', 'Auto-Parking-Type'];
  teams!: Team[]
  dataSource = new UserDataSource(this.teamService);

  constructor(private teamService: TeamService) {
    teamService.getTeamList().subscribe((teams) => {
      this.teams = teams;
    })
  }

  ngOnInit(): void {
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
