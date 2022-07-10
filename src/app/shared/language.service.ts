import { Injectable } from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {gameStats} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  // @ts-ignore
  gameStats: gameStats

  constructor(
    private translate: TranslateService
  ) { }

  setLanguage(lang: string){
    // @ts-ignore
    this.gameStats = JSON.parse(localStorage.getItem('gameStats'))
    localStorage.setItem('gameStats', JSON.stringify(
      this.gameStats = {
        ...this.gameStats,
        language: lang
      }
    ))
    this.getLanguage()
  }

  getLanguage(){
    //@ts-ignore
    this.translate.use(JSON.parse(localStorage.getItem('gameStats')).language)
  }

  getCountry(id: number){
    let country: string
    this.translate.get('Countries').subscribe((res: []) => {
      country = res[id]
    })
    //@ts-ignore
    return country
  }
}
