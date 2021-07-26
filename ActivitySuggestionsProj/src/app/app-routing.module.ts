import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { AppUseComponent } from './main/app-use/app-use.component';
import { MainAppComponent } from './main/main-app/main-app.component';
import { NotFoundComponent } from './shell/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainAppComponent },
  { path:'about', component: AboutComponent },
  { path:'appUse', component: AppUseComponent },
  { path:'**',component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
