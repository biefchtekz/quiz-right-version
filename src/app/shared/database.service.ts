import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Object>{
    return this.http.get(`https://biefchtekz-flag-quiz-default-rtdb.europe-west1.firebasedatabase.app/Countries.json`)
  }
}
