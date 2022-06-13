import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div style="text-align: center;align-content: center;width: 60%;margin: 10px auto;">
      <button mat-raised-button (click)="start()" color="primary" *ngIf="!isStarted" style="margin-top:50%">PLAY</button>
      <app-champion-guess *ngIf="isStarted" [isStarted]="isStarted"></app-champion-guess>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  isStarted: boolean;

  constructor() {
    this.isStarted = false
  }

  start() {
    this.isStarted = true;
  }

  ngOnInit(): void {
  }

}
