import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div style="text-align: center;align-content: center;width: 60%;margin: 10px auto;">
      <button mat-raised-button (click)="start()" color="primary" *ngIf="!isStarted&&!isStartedRush" style="margin-top:50%">PLAY</button>
      <app-champion-guess *ngIf="isStarted" [isStarted]="isStarted"></app-champion-guess>
      <button mat-raised-button (click)="startRush()" color="primary" *ngIf="!isStarted&&!isStartedRush">RUSH</button>
      <app-champion-guess-rush *ngIf="isStartedRush" [isStartedRush]="isStartedRush"></app-champion-guess-rush>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  isStarted: boolean;
  isStartedRush: boolean;

  constructor() {
    this.isStarted = false;
    this.isStartedRush = false;
  }

  start() {
    this.isStarted = true;
  }

  startRush(){
    this.isStartedRush=true;
  }

  ngOnInit(): void {
  }

}
