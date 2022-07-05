import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {QuizPageComponent} from "./quiz-page/quiz-page.component";

const routes: Routes = [
  {path: '', component: NavbarComponent, children:[
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: QuizPageComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
      preloadingStrategy: PreloadAllModules
  }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
