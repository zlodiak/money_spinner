import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {

	@Input('bgColor') backgroudColor: string;

  constructor(private el: ElementRef) { 
  	
  }

	ngOnInit() {		
		console.log(this.backgroudColor);	
		this.el.nativeElement.style.backgroundColor = this.backgroudColor;
	}  

}
