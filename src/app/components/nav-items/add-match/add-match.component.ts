import {Component, OnInit} from '@angular/core';
import {Match} from "../../../Match";
import {MatchService} from "../../../services/match.service";
import {Team} from "../../../Team";

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match: Match = new Match();

  constructor(private matchService: MatchService) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.match.fieldNumber == undefined || this.match.matchNumber == undefined) {
      alert("match number or match field can not be empty");
      return;
    }
    this.matchService.addMatch(this.match);
    console.log(this.match)
    this.match = new Match();
  }

}
