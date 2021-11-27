import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Match} from "../../../Match";
import {MatchService} from "../../../services/match.service";
import {TeamService} from "../../../services/team.service";

@Component({
  selector: 'app-view-match-dialog',
  templateUrl: './view-match-dialog.component.html',
  styleUrls: ['./view-match-dialog.component.css']
})
export class ViewMatchDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public match: Match, private matchService: MatchService, private dialogRef: MatDialogRef<ViewMatchDialogComponent>,
              public teamService: TeamService) {

  }

  ngOnInit(): void {
  }

  public getTeamNameFromNumber(num: number): string {
    return this.teamService.getTeamNameFromNumber(num);
  }

}
