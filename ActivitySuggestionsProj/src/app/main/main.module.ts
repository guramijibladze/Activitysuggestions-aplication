import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { AppUseComponent } from './app-use/app-use.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [MainComponent, AboutComponent, AppUseComponent],
  imports: [CommonModule,MainRoutingModule]
})
export class MainModule { }
