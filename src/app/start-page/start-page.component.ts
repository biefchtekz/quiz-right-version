import { Component, OnInit } from '@angular/core';
import {gameStats} from "../shared/interfaces";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  // @ts-ignore
  gameStats: gameStats

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    localStorage.setItem('gameStats', JSON.stringify(
      this.gameStats = {
      
      }
    ))
  }
}
