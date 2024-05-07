import {Component, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddProductDialogComponent} from "./dialog-box/product-dialog/add-product/add-product-dialog.component";
import {filter} from "rxjs";
import {CartService} from "../../services/cart.service";
import {ICart} from "../../models/cart";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent implements OnInit {

  @Output() cartsList: ICart[] = [];
  constructor(
    private adminService: AdminService,
    private cartService: CartService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getAllCarts();
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

  getAllCarts() {
    this.cartService.getCartsInDateRangeLimitedSorted()
      .subscribe(data => {
        this.cartsList = data;
      })
  }
}
