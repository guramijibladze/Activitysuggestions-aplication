import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AppUseComponent } from './app-use/app-use.component';
import { MainAppComponent } from './main-app/main-app.component';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [MainAppComponent, AboutComponent, AppUseComponent],
  imports: [CommonModule, SharedModule]
})
export class MainModule { }
