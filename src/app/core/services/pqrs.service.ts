import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  constructor(private http: HttpClient) {

  }

  getAllPQR(){
    return this.http.get('https://localhost:44341/api/PQR')
  }

}
