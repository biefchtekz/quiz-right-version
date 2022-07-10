import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {DatabaseService} from "./shared/database.service";
import {LanguageService} from "./shared/language.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {
    if (!localStorage.getItem('lang')) localStorage.setItem('lang', 'en')
  }


}
