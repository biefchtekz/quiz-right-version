import { Component, OnInit } from '@angular/core';
import {DatabaseService} from "../shared/database.service";
import {gameStats} from "../shared/interfaces";
import {TranslateService} from "@ngx-translate/core";
import {RandomService} from "../shared/random.service";
import {DialogsService} from "../shared/dialogs.service";
import {Router} from "@angular/router";
import {LanguageService} from "../shared/language.service";

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  flagHere: boolean = false
  // @ts-ignore
  gamestats: gameStats
  imgSrc: string = ''
  answers: string[] = []

  constructor(
    private translate: TranslateService,
    private getCodes: DatabaseService,
    private random: RandomService,
    private dialog: DialogsService,
    private router: Router,
    private language: LanguageService
  ) { }

  ngOnInit(): void {
    this.startPlaying()
  }

  startPlaying(){
    // @ts-ignore
    this.gamestats = JSON.parse(localStorage.getItem('gameStats'))
    this.getCountryCode()
    if (this.gamestats.start) {
      localStorage.setItem('gameStats', JSON.stringify(
        this.gamestats = {
          ...this.gamestats,
          start: false
        }
      ))
    }
  }

  getCountry(id: number){
    return this.language.getCountry(id)
  }

  getCountryCode(){
    let id: number
    if (this.gamestats.start){
      id = this.gamestats.answers[this.random.randomInRange(0, 4)]
      this.gamestats.correctAnsw.id = id
      localStorage.setItem('gameStats', JSON.stringify(
        this.gamestats = {
          ...this.gamestats,
          correctAnsw: {
            ...this.gamestats.correctAnsw,
            id: id
          }
        }
      ))
    } else {
      // @ts-ignore
      id = JSON.parse(localStorage.getItem('gameStats')).correctAnsw.id
    }

    this.getCodes.getAll().subscribe(res => {
      // @ts-ignore
      this.imgSrc = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${res[id]}.svg`
    })
  }

  selectAnswer(selectedId: number) {
    if (selectedId == this.gamestats.correctAnsw.id) {
      this.dialog.correctDialog().subscribe(()=>{
        localStorage.setItem('gameStats', JSON.stringify(
          this.gamestats = {
            ...this.gamestats,
            score: this.gamestats.score+1
          }
        ))
        this.random.generateNew()
        this.startPlaying()
      })
    }
    else {
      let hp = this.gamestats.hpLeft - 1
      localStorage.setItem('gameStats', JSON.stringify(
        this.gamestats = {
          ...this.gamestats,
          hpLeft: hp
        }
      ))
      this.dialog.incorrectDialog().subscribe(()=>{
        if (hp!=0){
          this.random.generateNew()
          this.startPlaying()
        } else {
          this.dialog.gameOverDialog().subscribe(()=>{
            this.router.navigate(['/'])
          })
        }
      })
    }
  }
}
