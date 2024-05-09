import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddProductDialogComponent} from "./dialog-box/product-dialog/add-product/add-product-dialog.component";
import {filter} from "rxjs";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent {

  constructor(
    private adminService: AdminService,
    public dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog
      .open(AddProductDialogComponent, {
        width: '500px',
        disableClose: true
      })
      .afterClosed()
      .pipe(filter((data) => Boolean(data)))
      .subscribe((data) => this.adminService.addProduct(data));
  }


}
