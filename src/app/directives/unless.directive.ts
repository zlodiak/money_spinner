import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({ selector: '[myUnless]'})
export class UnlessDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set myUnless(isVisibleSpinner: boolean) {
    if (isVisibleSpinner) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (!isVisibleSpinner) {
      this.viewContainer.clear();
    }
  }
}