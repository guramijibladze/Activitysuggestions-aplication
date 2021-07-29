import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const API_URL = new InjectionToken<string>('url token')

@Injectable()
export class BoredapiService {

  constructor(
    @Inject( API_URL ) private nameApi:string,
    private http: HttpClient
  ) { }

  getResult(category?:string):Observable<any>{
    return this.http.get(`${this.nameApi}&t=${category}`)
  }
}
