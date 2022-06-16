import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { AlertData } from '../../interfaces/alert-data';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  progress = 0;
  timer!: any;

  constructor(
    public snackBarRef: MatSnackBarRef<AlertComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: AlertData
  ) {}

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress == 100) {
        this.dismissAlert();
      }
    }, 40);
  }

  dismissAlert(): void {
    clearInterval(this.timer);
    this.snackBarRef.dismiss();
  }
}
