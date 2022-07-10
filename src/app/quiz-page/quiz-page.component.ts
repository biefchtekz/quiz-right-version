import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../shared/database.service";
import {gameStats} from "../shared/interfaces";
import {TranslateService} from "@ngx-translate/core";
import {RandomService} from "../shared/random.service";

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  flagHere: boolean = false
  // @ts-ignore
  gamestats: gameStats
  // @ts-ignore
  answers: number[]
  randCountry = 'UA'
  imgSrc = `http://purecatamphetamine.github.io/country-flag-icons/3x2/UA.svg`

  constructor(
    private translate: TranslateService,
    private getCodes: DatabaseService,
    private random: RandomService
  ) { }

  ngOnInit(): void {
    console.log(this.random.randomUniqueNum(164, 4))
  }

  getCountry(id: number){
    let country: string
    this.getCodes.getAll().subscribe(res => {
      // @ts-ignore
      this.answerCountry = res[this.number]
    })
    this.translate.get('Countries').subscribe((res: []) => {
      country = res[id]
    });
  }

  setCountry() {
    let number = this.random.randomInRange(0,164)
    this.getCountry(number)
  }

}
