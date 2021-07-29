import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Activity } from '../main.model';
import { BoredapiService } from '../services/boredapi.service';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss'],
})
export class MainAppComponent implements OnInit {
  form: FormGroup;
  activity = Activity;
  isSelect:boolean =  false;
  selected:string

  constructor(
    private boredapiservice: BoredapiService
  ) { }

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
    this.selected = this.form.value.activity
    this.boredapiservice.getResult(this.selected).subscribe( x => console.log(x))
    // console.log( this.name)
  }
}
