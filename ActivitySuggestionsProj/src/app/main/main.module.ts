import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AppUseComponent } from './app-use/app-use.component';
import { MainAppComponent } from './main-app/main-app.component';



@NgModule({
  declarations: [MainAppComponent, AboutComponent, AppUseComponent, MainAppComponent],
  imports: [CommonModule]
})
export class MainModule { }
