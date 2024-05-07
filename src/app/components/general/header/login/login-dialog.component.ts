import {Component} from '@angular/core';
import {NonNullableFormBuilder, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {

  form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    public authService: AuthService,
    public formBuilder: NonNullableFormBuilder,
  ) {
  }

  onSubmit() {
    this.dialogRef.close(this.form.getRawValue());

    this.authService.currentUserName = <string>this.form.value.username;
  }
}
