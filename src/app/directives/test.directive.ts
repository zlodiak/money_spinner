import { Directive, Input, OnInit, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {

	@Input() visibility: boolean;

  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<Object>) { 
  	
  }

	ngOnInit() {	
		console.log(this.visibility);	
	  if(this.visibility) {
	  	this.viewContainer.createEmbeddedView(this.template);
	  } else {
	  	this.viewContainer.clear();
	  }
	}  

}
