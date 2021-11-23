import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private ui: string = "add-team";
  private subject = new BehaviorSubject<string>(this.ui);

  constructor() {
    this.subject.next(this.ui);
  }

  public changeUi(newUI: string): void {
    this.ui = newUI;
    this.subject.next(this.ui);
    console.log(this.ui)
  }

  public getUI(): Observable<string> {
    return this.subject.asObservable();
  }
}
