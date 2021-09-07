import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { CreateUser } from '../models/createUser';

@Injectable({
  providedIn: 'root'
})
export class CreateuserService {

  constructor(private http: HttpClient) { }


  create(cliente: CreateUser): Observable<CreateUser> {
    return this.http.post<CreateUser>(`${API_CONFIG.baseUrl}/user/createuser`, cliente);
  }
}
