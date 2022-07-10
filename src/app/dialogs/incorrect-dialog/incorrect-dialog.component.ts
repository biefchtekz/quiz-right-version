import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../../shared/language.service";

@Component({
  selector: 'app-incorrect-dialog',
  templateUrl: './incorrect-dialog.component.html',
  styleUrls: ['./incorrect-dialog.component.scss']
})
export class IncorrectDialogComponent implements OnInit {

  country = ''

  constructor(
    private language: LanguageService
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    this.country = this.language.getCountry(JSON.parse(localStorage.getItem('gameStats')).correctAnsw.id)
  }

}
