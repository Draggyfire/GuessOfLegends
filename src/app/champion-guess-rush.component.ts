import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ChampionService} from "./champion.service";

@Component({
  selector: 'app-champion-guess-rush',
  template: `
    <div >
      <div style="display:flex;flex-direction: column;" *ngIf="!end">
        <h1 style="color: white">{{hour}}:{{min}}:{{sec}}</h1>
        <h2 style="color: white">{{score}}</h2>
        <img src="{{this.championService.getSprite()}}">
        <br>
        <input matInput type="text" (keyup)="onKey($event)">
      </div>
      <div *ngIf="end">
        <app-end [time]="hour.toString()+':'+min.toString()+':'+sec.toString()" [score]="score"></app-end>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ChampionGuessRushComponent implements OnInit {
  @Input() isStartedRush:boolean;
  answer:String;
  userAnswer:String;
  score:number;
  end:boolean;

  sec:number;
  min:number;
  hour:number;
  // @ts-ignore
  interval: NodeJS.Timeout | undefined;

  constructor(public championService:ChampionService) {
    this.isStartedRush=false;
    this.hour=0;
    this.min=0;
    this.sec=0;
    this.answer="";
    this.userAnswer="";
    this.score=0;
    this.end=false;
  }

  onKey(event:any){
    this.userAnswer=event.target.value;
    if(this.isGoodAnswer()){
      event.target.value = "";
    }
  }

  isGoodAnswer():boolean{
    if(this.answer.toLocaleUpperCase() == this.userAnswer.toLocaleUpperCase()){
      this.score++;
      this.restart();
      return true;
    }
    return false;
  }
  restart(){
    if(this.championService.selectChampion()&&this.score<10){
      this.answer=this.championService.getChampionName();
    }else{
      this.pauseTimer();
      this.end = true;
    }
  }

  startTimer(){
    this.interval = setInterval(() => {
      if((this.sec+1) == 60){
        if((this.min+1) == 60){
          this.hour++;
          this.min=0;
        }else {
          this.min++;
        }
        this.sec=0;
      }else {
        this.sec++
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.championService.selectChampion();
    this.answer=this.championService.getChampionName();
  }


  ngOnChanges(changes: SimpleChanges){
    for (const change in changes) {
      if(change=="isStartedRush"){
        this.startTimer()
      }
    }
  }

}
