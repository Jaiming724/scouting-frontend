import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";
import {Match} from "../Match";
import {HttpClient} from "@angular/common/http";
import {Team} from "../Team";

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private apiUrl: string = environment.apiUrl;
  private matches: Match[] = [];
  private subject = new BehaviorSubject<Match[]>(this.matches);

  constructor(private httpClient: HttpClient) {
    this.getMatches().subscribe((matches) => {
      this.matches = matches;
      this.subject.next(this.matches);
    })
  }

  private getMatches(): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.apiUrl + "getMatches");
  }

  public getMatchList(): Observable<Match[]> {
    return this.subject.asObservable();
  }

  public addMatch(match: Match): void {
    this.httpClient.post<Match>(this.apiUrl + "addMatch", match).subscribe((newMatch) => {
      this.matches.push(newMatch);
      this.subject.next(this.matches);
    })
  }

  public updateMatch(match: Match): void {
    this.httpClient.post<Match>(this.apiUrl + "addMatch", match).subscribe((newMatch) => {
      this.subject.next(this.matches);
    })
  }

}
