import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LoadingComponent } from './loading/loading.component';
import { SpinerComponent } from './loading/spiner/spiner.component';


@NgModule({
  declarations: [
    LoadingComponent,
    SpinerComponent
  ],
  imports: [CommonModule],
  exports: [TranslateModule, AngularSvgIconModule]
})
export class SharedModule { }
