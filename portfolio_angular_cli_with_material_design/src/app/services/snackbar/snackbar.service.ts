import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  showMassage(msg: string): void {
    console.log('Snackbar Service')
    this.snackBar.open(msg, '✖', {
      duration: 15000,
      horizontalPosition: "right",
      verticalPosition: "bottom"
    })
  }
}
