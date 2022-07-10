import { Injectable } from '@angular/core';
import {CorrectDialogComponent} from "../dialogs/correct-dialog/correct-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {IncorrectDialogComponent} from "../dialogs/incorrect-dialog/incorrect-dialog.component";
import {GameOverDialogComponent} from "../dialogs/game-over-dialog/game-over-dialog.component";
import {ReturnDialogComponent} from "../dialogs/return-dialog/return-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  private time: string = '200ms'

  constructor(
    private dialog: MatDialog
  ) { }

  correctDialog() {
    let enterAnimationDuration = this.time
    let exitAnimationDuration = this.time
    let dialogRef = this.dialog.open(CorrectDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    })
    return dialogRef.afterClosed()
  }

  incorrectDialog() {
    let enterAnimationDuration = this.time
    let exitAnimationDuration = this.time
    let dialogRef = this.dialog.open(IncorrectDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    })
    return dialogRef.afterClosed()
  }

  gameOverDialog() {
    let enterAnimationDuration = this.time
    let exitAnimationDuration = this.time
    let dialogRef = this.dialog.open(GameOverDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    })
    return dialogRef.afterClosed()
  }

  returnDialog() {
    let enterAnimationDuration = this.time
    let exitAnimationDuration = this.time
    let dialogRef = this.dialog.open(ReturnDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    })
    return dialogRef.afterClosed()
  }
}
