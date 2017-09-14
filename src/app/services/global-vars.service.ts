import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalVarsService {

	private moneyBox: any[];
	private isVisibleSpinner = new BehaviorSubject(false);

  constructor() { 
  	this.moneyBox = localStorage.moneyBox ? JSON.parse(localStorage.moneyBox) : [];
  }

  delMoneyBox(index): any[] {
    this.moneyBox.splice(index, 1);
    return this.moneyBox;
  };

  getMoneyBox(): any[] {
    return this.moneyBox;
  };  

  addMoneyBox(arr): void {    
  	this.moneyBox.push(arr);
  	localStorage.moneyBox = JSON.stringify(this.moneyBox);
  };  

  getSpinnerState(): Observable<boolean> {
    console.log('this.isVisibleSpinner', this.isVisibleSpinner);
  	return this.isVisibleSpinner;
  };  

  setSpinnerState(state): void {
    console.log('setSpinnerState', state);
    this.isVisibleSpinner.next(state);
  };  

}
