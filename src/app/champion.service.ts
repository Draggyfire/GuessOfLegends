import { Injectable } from '@angular/core';
import {FULLDATA} from "./lag-data";
import {DATA} from "./mock-data";


@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  tabChampionName:String[];
  sprite:String;
  championName:String;

  getSprite():String{
    return this.sprite
  }

  getChampionName():String{
    return this.championName;
  }

  removeChampion(championName:String):void{
    if(this.tabChampionName.length==0){
      return;
    }
    this.tabChampionName.forEach((champion,index)=>{
      if(champion==championName){
        this.tabChampionName.splice(index,1);
      }
    });
  }

  selectChampion():void{
    let randomNumber = Math.floor(Math.random() * this.tabChampionName.length);
    this.championName = this.tabChampionName[randomNumber];
    let spriteChampionName = this.championName.replace(" ","");
    this.sprite = "../assets/ChampionSplashArt/"+spriteChampionName+"_0.jpg";
    this.removeChampion(this.championName);

  }


  constructor() {
    this.tabChampionName = DATA;
    this.championName='';
    this.sprite="";
  }
}
