import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private lang: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor() {
  }

  getLang(): Observable<string> {
    return this.lang.asObservable();
  }

  setLang(lang: string) {
    this.lang.next(lang);
  }
}
