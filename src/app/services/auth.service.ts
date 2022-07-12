import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Token } from '../interfaces/token.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _token !: Token ;


    constructor(private http: HttpClient) { }

    public get token() {
        return { ...this._token! };
    }

    public getToken() {
        return this.http.get<Token>('assets/json/Token.txt').pipe( tap( respuesta  => this._token = respuesta) );
    }

}