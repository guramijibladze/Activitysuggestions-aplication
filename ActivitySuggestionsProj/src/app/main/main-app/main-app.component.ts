import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Activity, ApiBackEnd, ApiView } from '../main.model';
import { BoredapiService } from '../services/boredapi.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss'],
})
export class MainAppComponent implements OnInit {
  form: FormGroup;
  activity = Activity;
  isSelect:boolean =  false;
  selected:string;
  private _apiview: ApiView;
  private _apibackend: ApiBackEnd;

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
    const res$ = this.boredapiservice.getResult(this.selected)
      .pipe(map((c) => { 
        return {activity: c.activity,
                accessibility: c.accessibility,
                website: c.link,
                participants: c.participants,
                type: c.type}
      }))

      res$.subscribe( x => console.log(x))
      
  }
}

// activity : string,
//     accessibility: number
//     website: string,
//     participants: number;
//     type: string