import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarsService {

	private moneyBox: any[];
	private isVisibleSpinner: boolean = false;

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

  getSpinnerState(): boolean {
  	return this.isVisibleSpinner;
  }; 

  setSpinnerState(state): void {
  	this.isVisibleSpinner = state;
  };    

}
