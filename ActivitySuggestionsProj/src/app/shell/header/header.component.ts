import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // get isKa(): boolean {
  //   return this.isLanguage('ka');
  // }

  constructor(
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
  }

  ka(){
    this.translateService.use('ka')
  }

  en(){
    this.translateService.use('en')
  }
  // private isLanguage(lang: string): boolean {
  //   const defaultLang = this.translateService.defaultLang;
  //   const currentLang = this.translateService.currentLang;

  //   return currentLang ? currentLang === lang : defaultLang === lang;
  // }

}
