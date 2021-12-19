import {Component, OnInit} from '@angular/core';
import {Team} from "../../../Team";
import {TeamService} from "../../../services/team.service";

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team: Team = new Team();

  constructor(private teamService: TeamService) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.team.teamName == undefined || this.team.teamNumber == undefined) {
      alert("team name or number can not be empty");
      return;
    }
    this.team.calculateAutoPoints()
    this.team.calculateTeleop()
    this.team.calculateEndgame()
    this.team.calculateTotal()

    this.teamService.addTeam(this.team);
    console.log(this.team)
    this.team = new Team();
  }
}
