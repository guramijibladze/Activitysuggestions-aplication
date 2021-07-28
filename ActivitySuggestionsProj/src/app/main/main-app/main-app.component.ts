import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Activity } from '../main.model';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {
  form: FormGroup;
  activity = Activity;
  arrayActivity:string[] = []

  constructor() { }

  ngOnInit(): void {
    this.createForm()
    this.arrayActivity = Object.values(this.activity)
  }

  private createForm(){
    this.form = new FormGroup({
      activity: new FormControl(),
    })
  }


  log(){
    console.log(this.form)
  }
}
