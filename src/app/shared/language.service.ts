import { Injectable } from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translate: TranslateService
  ) { }

  setLanguage(lang: string){
    localStorage.setItem('lang', lang)
    this.getLanguage()
  }

  getLanguage(){
    //@ts-ignore
    this.translate.use(localStorage.getItem('lang'))
  }
}
