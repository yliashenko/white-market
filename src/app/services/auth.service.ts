import {Injectable} from '@angular/core';
import {AuthToken, IUserLogin} from "../models/users";
import {Url} from "../app.config";
import {HttpClient} from "@angular/common/http";
import {UserService} from "./user.service";
import {BehaviorSubject, filter} from "rxjs";
import {LoginDialogComponent} from "../components/general/header/login/login-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserName: string;
  currentUserId: number | undefined;
  isUserAuthorized$ = new BehaviorSubject<boolean>(this.checkInitialAuth());

  constructor(
    private httpClient: HttpClient,
    public userService: UserService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) {

    this.restoreUserSession();
  }

  openDialog(): void {
    this.dialog
      .open(LoginDialogComponent, {width: '400px'})
      .afterClosed()
      .pipe(filter((data) => Boolean(data)))
      .subscribe((data) => this.login(data));
  }

  login(userLoginDto: IUserLogin) {
    this.httpClient.post<AuthToken>(`${Url}/auth/login`, userLoginDto)
      .subscribe((data) => {

        if (data.token) {
          this.saveToken(data.token);
          this.saveUserName();
          this.updateAuthStatus(true);

          this.userService.getAllUsers()
            .subscribe((data) =>
              this.currentUserId = data
                .find(user => user.username === this.currentUserName)?.id);

        }
      });
  }

  private checkInitialAuth(): boolean {
    const token = localStorage.getItem('auth_token');
    return !!token;
  }

  updateAuthStatus(isAuthorized: boolean) {
    this.isUserAuthorized$.next(isAuthorized);
  }

  get userAuthorized$() {
    return this.isUserAuthorized$.asObservable();
  }

  private saveToken(token: string): void {
    localStorage.setItem('auth_token', token);
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('username');
    this.currentUserName = '';
    this.updateAuthStatus(false);
  }

  saveUserName() {
    localStorage.setItem('username', this.currentUserName);
  }

  private restoreUserSession() {
    const token = localStorage.getItem('auth_token');
    const username = localStorage.getItem('username');
    if (token && username) {
      this.currentUserName = username;
      this.isUserAuthorized$.next(true);
    }
  }

  openSnackBar() {
    this.snackBar.open(
      "You were successfully logged in",
      'Ok', {
        duration: 3000
      });
  }
}
