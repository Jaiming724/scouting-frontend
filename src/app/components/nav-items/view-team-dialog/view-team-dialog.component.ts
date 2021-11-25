import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Team} from "../../../Team";
import {TeamService} from "../../../services/team.service";

@Component({
  selector: 'app-view-team-dialog',
  templateUrl: './view-team-dialog.component.html',
  styleUrls: ['./view-team-dialog.component.css']
})
export class ViewTeamDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public team: Team, private teamService: TeamService, private dialogRef: MatDialogRef<ViewTeamDialogComponent>) { }

  ngOnInit(): void {
  }

}
