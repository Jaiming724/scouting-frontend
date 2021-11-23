import {Component, OnInit} from '@angular/core';
import {Team} from "../../../Team";

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team: Team = new Team();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.team)
  }
}
