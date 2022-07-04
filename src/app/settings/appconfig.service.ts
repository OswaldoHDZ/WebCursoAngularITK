import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appconfig } from './appconfig.interface';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppconfigService {

  constructor( private http: HttpClient ) { }

  public getAppconfig() : Promise<Appconfig | undefined> {
    return this.http.get('assets/json/WebCursoAngularITK.txt'). toPromise();
  
  }


}
