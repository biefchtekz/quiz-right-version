import { Injectable } from '@angular/core';
import {gameStats} from "./interfaces";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  // @ts-ignore
  gameStats: gameStats = JSON.parse(localStorage.getItem('gameStats'))

  constructor(
    private router: Router
  ) { }

  randomInRange(min: number, max: number){
    return Math.floor(Math.random() * max) + min
  }

  randomUniqueNum(range: number, outputCount: number) {

    let arr = []
    for (let i = 1; i <= range; i++) {
      arr.push(i)
    }

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }

    return result;
  }

  generateNew(){
    // @ts-ignore
    this.gameStats = JSON.parse(localStorage.getItem('gameStats'))
    localStorage.setItem('gameStats', JSON.stringify(
      this.gameStats = {
        ...this.gameStats,
        start: true,
        answers: this.randomUniqueNum(164, 4),
        correctAnsw: {
          ...this.gameStats.correctAnsw,
          id: -1
        }
      }
    ))
  }
}
