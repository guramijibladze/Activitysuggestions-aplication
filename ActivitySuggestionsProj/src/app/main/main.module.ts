import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AppUseComponent } from './app-use/app-use.component';
import { MainAppComponent } from './main-app/main-app.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoredapiService, API_URL } from './services/boredapi.service';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [ MainAppComponent, AboutComponent, AppUseComponent ],
  imports: [ CommonModule, SharedModule, FormsModule, ReactiveFormsModule ],
  providers: [ BoredapiService, 
    {
      provide: API_URL,
      useValue: environment.nameApi
    }]
})
export class MainModule { }
