import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";


import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {AddTeamComponent} from './components/nav-items/add-team/add-team.component';
import {AddMatchComponent} from './components/nav-items/add-match/add-match.component';
import {ViewTeamsComponent} from './components/nav-items/view-teams/view-teams.component';
import {ViewMatchesComponent} from './components/nav-items/view-matches/view-matches.component';
import {BodyComponent} from './components/body/body.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddTeamComponent,
    AddMatchComponent,
    ViewTeamsComponent,
    ViewMatchesComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
