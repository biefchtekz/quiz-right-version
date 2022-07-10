import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {DatabaseService} from "./shared/database.service";
import {LanguageService} from "./shared/language.service";
import {gameStats} from "./shared/interfaces";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  // @ts-ignore
  gameStats: gameStats

  constructor() {}

  ngOnInit(): void {
    if (!localStorage.getItem('gameStats')) localStorage.setItem('gameStats', JSON.stringify(
      this.gameStats = {
        ...this.gameStats,
        language: 'en'
      }
    ))
  }


}
