import { Component, OnInit } from '@angular/core';
import {gameStats} from "../shared/interfaces";
import {Router, RouterModule} from "@angular/router";
import {RandomService} from "../shared/random.service";
import {DatabaseService} from "../shared/database.service";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  // @ts-ignore
  gameStats: gameStats = JSON.parse(localStorage.getItem('gameStats'))
  imgSrc = 'http://purecatamphetamine.github.io/country-flag-icons/3x2/UA.svg'

  constructor(
    private router: Router,
    private random: RandomService,
    private flags: DatabaseService
  ) { }

  ngOnInit(): void {
    setInterval(() => {
      let randNum = Math.floor(Math.random() * 164) + 0
      this.flags.getAll().subscribe(res => {
        // @ts-ignore
        this.imgSrc = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${res[randNum]}.svg`
      })
    },1000)
  }

  start() {
    localStorage.setItem('gameStats', JSON.stringify(
      this.gameStats = {
        ...this.gameStats,
        hpLeft: 3,
        score: 0,
      }
    ))
    this.random.generateNew()
    this.router.navigate(['play'])
  }
}
