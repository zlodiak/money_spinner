import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarsService {

	private moneyBox: any[];

  constructor() { 
  	this.moneyBox = localStorage.moneyBox ? JSON.parse(localStorage.moneyBox) : [];
  }

  getMoneyBox(): any[] {
  	return this.moneyBox;
  };

  addMoneyBox(arr): void {
  	this.moneyBox.push(arr);
  	localStorage.moneyBox = JSON.stringify(this.moneyBox);
  };  

}
