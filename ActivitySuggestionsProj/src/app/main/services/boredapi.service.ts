import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBackEnd } from '../main.model';

export const API_URL = new InjectionToken<string>('url token')

@Injectable()
export class BoredapiService {

  constructor(
    @Inject( API_URL ) private nameApi:string,
    private http: HttpClient
  ) { }

  getResult(category?:string):Observable<ApiBackEnd>{
    return this.http.get<ApiBackEnd>(`${this.nameApi}&t=${category}`)
  }
}
