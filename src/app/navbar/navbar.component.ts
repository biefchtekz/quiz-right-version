import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../shared/language.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public languages: LanguageService
  ) { }

  ngOnInit(): void {
      this.languages.getLanguage()
  }

}
