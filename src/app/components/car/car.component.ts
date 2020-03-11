import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  public name:string;
  public speed:any;
  public modul:string;
  public colors:Colors;
  public options:string[];
  public isEdid:boolean = false;

  constructor() { }

  ngOnInit() {
    this.name='AUDI';
    this.speed='235';
    this.modul='RS8';
    this.colors={
      car:'white',
        salon:'black',
        wheels:'silver'
    }
    this.options=["abs", "avtopilot", "avto parking"];
  }
  shouEdid(){
    this.isEdid = !this.isEdid;
  }

  addopt(option){
    this.options.unshift(option.value);
    return false;
  }
  clickOpt(rim){
    for (let i = 0; i<this.options.length; i++){
      if (this.options[i]== rim){
        this.options.splice(i,1);
        break;
      }
    }
  }

  carSelect(modCar){
    if (modCar==='bmw'){
      this.name='BMW';
      this.speed='350';
      this.modul='E 46';
      this.colors={
        car:'red',
        salon:'red',
        wheels:'red'
      };
      this.options=["abs", "avtopilot", "avto parking"];
    }else if (modCar==='audi'){
      this.name='AUDI';
      this.speed='490';
      this.modul='T T';
      this.colors={
        car:'elo',
        salon:'blu',
        wheels:'orange'
      };
      this.options=["abs", "avtopilot", "avto parking","cruis control"];
    }else if (modCar==='mersedes'){
      this.name='MERSEDES';
      this.speed='310';
      this.modul='E 200';
      this.colors={
        car:'blac',
        salon:'blac',
        wheels:'red'
      };
      this.options=["abs", "avtopilot"];
    }

  }


}
interface Colors {
  car:string;
  salon:string;
  wheels:string;
}
