import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSpinner]'
})
export class SpinnerDirective {

  constructor(private templateRef: TemplateRef<any>, 
              private viewContainer: ViewContainerRef) { };

  @Input() set while(condition: boolean) {
      if (condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
  }  

}
