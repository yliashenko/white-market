import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {NonNullableFormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrl: './add-product-dialog.component.css'
})
export class AddProductDialogComponent {

  form = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', Validators.required],
    price: ['', Validators.required],
    category: '',
  })

  constructor(
    public dialogRef: MatDialogRef<AddProductDialogComponent>,
    public formBuilder: NonNullableFormBuilder,
  ) {}

  onSubmit() {
    this.dialogRef.close(this.form.getRawValue());

  }
}
