import { Component, OnInit } from '@angular/core';

import { GlobalVarsService } from '../services/global-vars.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

	private moneyBox: any[];

  constructor(private globalVarsService: GlobalVarsService) { }

  ngOnInit() {
  	this.getMoneyBox();
  }

  private getMoneyBox(): void {
  	this.moneyBox = this.globalVarsService.getMoneyBox();
  };

}
