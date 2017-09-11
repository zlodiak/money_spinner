import { Component, OnInit } from '@angular/core';

import { MoneyService } from '../services/money.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

	private checkboxes: Object = {};
	private money: Object = {};
	private moneyLabels: string[] = [];

  constructor(private moneyService: MoneyService) {  }

  ngOnInit() {
  	let moneyObj = this.getMoney();

  	console.log(this.checkboxes);


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
  	console.log(checkboxes);
  };

}
