import {Component, OnInit} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  public ui!: string;
  private subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = uiService.getUI().subscribe((ui) => {
      this.ui = ui;
    })
  }

  ngOnInit(): void {
  }

}
