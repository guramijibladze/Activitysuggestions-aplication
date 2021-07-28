import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Activity } from '../main.model';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {
  form: FormGroup;
  activity = Activity;
  isSelect:boolean =  false;

  constructor() { }

  ngOnInit(): void {
    this.createForm()
  }

  private createForm(){
    this.form = new FormGroup({
      activity: new FormControl([Validators.required]),
    })
  }


  submit(){
    if(!this.form.touched){
      this.isSelect = true;
      return
    }
    this.isSelect = false;
    console.log(this.form.value.activity)
  }
}
