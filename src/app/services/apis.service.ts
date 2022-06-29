import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApisResponse } from '../interfaces/apis-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  private api = 'https://api.publicapis.org';

  constructor( private http: HttpClient ) { }

  public getApis() : Observable<ApisResponse>{
    const url = `${ this.api }/entries`;
    return this.http.get<ApisResponse>(url);
  }
}
