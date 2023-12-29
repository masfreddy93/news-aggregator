import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface IConfirmationDialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.dialog.html',
  styleUrls: ['./confirmation.dialog.scss'],
})
export class ConfirmationDialog {
  title: string;
  message: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: IConfirmationDialogData
  ) {
    this.title = data.title;
    this.message = data.message;
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
