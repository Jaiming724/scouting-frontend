import {Component, OnInit} from '@angular/core';
import {Match} from "../../../Match";
import {DataSource} from "@angular/cdk/collections";
import {Observable, Subscription} from "rxjs";
import {MatchService} from "../../../services/match.service";
import {MatDialog} from "@angular/material/dialog";
import {UserDataSource} from "../view-teams/view-teams.component";
import {ViewTeamDialogComponent} from "../view-team-dialog/view-team-dialog.component";
import {ViewMatchDialogComponent} from "../view-match-dialog/view-match-dialog.component";
import {TeamService} from "../../../services/team.service";

@Component({
  selector: 'app-view-matches',
  templateUrl: './view-matches.component.html',
  styleUrls: ['./view-matches.component.css']
})
export class ViewMatchesComponent implements OnInit {
  matches!: Match[]
  dataSource = new MatchDataSource(this.matchService);
  subscription!: Subscription;
  displayedColumns: string[] = ['Match-Number', 'Red-Teams', 'Blue-Teams', 'Total-Score'];

  constructor(private matchService: MatchService, private matDialog: MatDialog) {
    this.subscription = matchService.getMatchList().subscribe((matches) => {
      this.matches = matches
    })
  }

  ngOnInit(): void {
  }

  public displayMatch(match: Match) {
    let dialogRef = this.matDialog.open(ViewMatchDialogComponent, {data: match})
    dialogRef.afterClosed().subscribe((str: Task) => {
      console.log(str)
    })
  }
}

export class MatchDataSource extends DataSource<any> {
  constructor(private matchService: MatchService) {
    super();
  }

  connect(): Observable<Match[]> {
    return this.matchService.getMatchList();
  }

  disconnect() {
  }
}
