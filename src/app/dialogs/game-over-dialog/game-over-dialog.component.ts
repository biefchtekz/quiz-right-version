import { Component, OnInit } from '@angular/core';
import {gameStats} from "../../shared/interfaces";

@Component({
  selector: 'app-game-over-dialog',
  templateUrl: './game-over-dialog.component.html',
  styleUrls: ['./game-over-dialog.component.scss']
})
export class GameOverDialogComponent implements OnInit {

  // @ts-ignore
  score: number

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.score = JSON.parse(localStorage.getItem('gameStats')).score
  }

}
