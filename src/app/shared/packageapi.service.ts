import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageapiService {

  constructor(private http: HttpClient) { }


  getPackages$() {
    const url = 'http://localhost:8000/api/packages';
    return this.http.get(url);

    
  }
}
