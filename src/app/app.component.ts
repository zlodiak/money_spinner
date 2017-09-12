import { Component } from '@angular/core';

import { GlobalVarsService } from './services/global-vars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	private isVisibleSpinner: boolean;
  
  constructor(private globalVarsService: GlobalVarsService) {  
  	this.isVisibleSpinner = this.globalVarsService.getSpinnerState();
  }
}
