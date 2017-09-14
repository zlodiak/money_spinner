import { Component, OnInit } from '@angular/core';

import { MoneyService } from '../services/money.service';
import { GlobalVarsService } from '../services/global-vars.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

	private checkboxes: Object = {};
	private money: Object = {};
	private moneyLabels: string[] = [];

  constructor(private moneyService: MoneyService, private globalVarsService: GlobalVarsService) {  }

  ngOnInit() {
  	let moneyObj = this.getMoney();
  }

  private getMoney(): void {
    this.moneyService
        .getMoney()
        .subscribe(data => {        						
        						this.money = JSON.parse(data._body);
                    console.log(typeof this.money, this.money['Valute']);    

										for(let key in this.money['Valute']) {
											if (!this.money['Valute'].hasOwnProperty(key)) continue;
											this.moneyLabels.push(key);
											this.checkboxes[key] = false;
										}

										console.log('this.moneyLabels', this.moneyLabels);
                  }, 
                  err => {
                    console.log('err')         
                  });    
  };   

  private send(checkboxes): void {
  	let checkboxesChecked: string[] = [];

		for(var prop in checkboxes) {
		  if (!checkboxes.hasOwnProperty(prop)) continue;
		  if(checkboxes[prop] === true) {
		  	checkboxesChecked.push(prop);
		  }	  	
  	};

    if(checkboxesChecked.length == 0) { return; }

  	this.globalVarsService.addMoneyBox(checkboxesChecked);
    this.globalVarsService.setSpinnerState(true);

    setTimeout(() => {
      this.globalVarsService.setSpinnerState(false);
      this.clearCheckboxes();      
    }, 3000);    
	}

	private clearCheckboxes(): void {
		for(var prop in this.checkboxes) {
		  if (!this.checkboxes.hasOwnProperty(prop)) continue;
		  this.checkboxes[prop] = false;  	
  	};
	};


}
