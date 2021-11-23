import {Component, OnInit} from '@angular/core';
import {UiService} from "../../services/ui.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private uiService: UiService) {
  }

  ngOnInit(): void {
  }

  public changeUI(ui: string) {
    this.uiService.changeUi(ui);
  }
}
