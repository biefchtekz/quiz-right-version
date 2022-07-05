import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {DatabaseService} from "./shared/database.service";
import {LanguageService} from "./shared/language.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  country = ''
  answerCountry = ''
  number = -1

  constructor(
    private translate: TranslateService,
    private getCodes: DatabaseService,
    public languages: LanguageService
  ) {}

  randomInRange(min: number, max: number){
    return Math.floor(Math.random() * max) + min
  }

  getCountry(){
    this.getCodes.getAll().subscribe(res => {
      // @ts-ignore
      this.answerCountry = res[this.number]
    })
    this.translate.get('Countries').subscribe((res: []) => {
      this.country = res[this.number]
    });
  }

  setCountry() {
    this.number = this.randomInRange(0,164)
    this.getCountry()
  }

  ngOnInit(): void {
    localStorage.setItem('lang', 'ua')
  }


}
