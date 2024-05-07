import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUserDetails} from "../models/users";
import {Url} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient) {
  }

  getAllUsers() {
    return this.httpClient.get<IUserDetails[]>(`${Url}/users`);
  }

  getUserDetails(id: number) {
    return this.httpClient.get<IUserDetails>(`${Url}/users/${id}`);
  }
}
