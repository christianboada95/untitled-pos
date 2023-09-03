import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '@shared/models/user';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }
}
