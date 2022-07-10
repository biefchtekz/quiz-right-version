import { Component, OnInit } from '@angular/core';
import {LanguageService} from "../shared/language.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {DialogsService} from "../shared/dialogs.service";
import {map} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeUrl: any

  constructor(
    public languages: LanguageService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: DialogsService
  ) { }

  ngOnInit(): void {
      this.languages.getLanguage()
  }

  returnHome() {
    if (this.router.url != '/'){
      this.dialog.returnDialog().subscribe((res)=>{
        if (JSON.parse(res)){
          this.dialog.gameOverDialog().subscribe(()=>{
            this.router.navigate(['/'])
          })
        }
      })
    }
  }
}
