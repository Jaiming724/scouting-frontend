import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Team} from "../Team";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl: string = environment.apiUrl;
  private teams: Team[] = [];
  private subject = new BehaviorSubject<Team[]>(this.teams);

  constructor(private http: HttpClient) {
    this.getTeams().subscribe((tasks) => {
      this.teams = tasks
      this.subject.next(this.teams)
    });
  }

  private getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl + "getTeams");
  }

  public getTeamList(): Observable<Team[]> {
    return this.subject.asObservable();
  }

  public addTeam(team: Team): void {
    this.http.post<Team>(this.apiUrl + "addTeam", team).subscribe((newTeam) => {
      this.teams.push(newTeam);
      this.subject.next(this.teams)
    })
  }

  public updateTeam(team: Team): void {

    this.http.post<Team>(this.apiUrl + "addTeam", team).subscribe((newTeam) => {
      this.subject.next(this.teams)
    })
  }

  public getTeamNameFromNumber(num: number): string {
    for (let i = 0; i < this.teams.length; i++) {
      if (this.teams[i].teamNumber == num) {
        if (this.teams[i].teamName !== undefined) {
          return this.teams[i].teamName!;
        }
      }
    }
    return "unknown";
  }
}
