import { Component } from '@angular/core';

import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { GlobalVarsService } from './services/global-vars.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	private isVisibleSpinner: boolean;
  
  constructor(private globalVarsService: GlobalVarsService) {  
		this.globalVarsService.getSpinnerState().subscribe(data => setTimeout(() => {
		  console.log('subscribe', data);
		  this.isVisibleSpinner = data;
		}, 0));  	
  };
}


