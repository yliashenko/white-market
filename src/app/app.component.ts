import {Component, OnInit} from '@angular/core';
import {filter, map, merge, Observable} from "rxjs";
import {ResolveEnd, ResolveStart, Router} from "@angular/router";
import {IUserDetails} from "./models/users";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  isLoading$!: Observable<boolean>;
  private _showLoaderEvents$!: Observable<boolean>;
  private _hideLoaderEvents$!: Observable<boolean>;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

    this._showLoaderEvents$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveStart),
      map(() => true)
    );
    this._hideLoaderEvents$ = this.router.events.pipe(
      filter((e) => e instanceof ResolveEnd),
      map(() => false)
    );

    this.isLoading$ = merge(this._showLoaderEvents$, this._hideLoaderEvents$);
  }
}
