import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TypeapiService {

  constructor(private http:HttpClient) { }

  getTypes$() {
    const url = 'http://localhost:8000/api/types';
    return this.http.get(url);
  }
}
