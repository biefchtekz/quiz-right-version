import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {DatabaseService} from "./services/database.service";
import {LanguageService} from "./services/language.service";
import {gameStats} from "./interfaces/interfaces";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // @ts-ignore
  gameStats: gameStats

  constructor() {
  }

  ngOnInit(): void {
    if (!localStorage.getItem('gameStats')) localStorage.setItem('gameStats', JSON.stringify(
      this.gameStats = {
        ...this.gameStats,
        language: 'en'
      }
    ))
  }


}
