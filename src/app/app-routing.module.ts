import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './agilebot/main/main.component';


const routes: Routes = [{
  path:"home",
  component: MainComponent
},{
  path:"",
  redirectTo:"\home",
  pathMatch:"full"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
