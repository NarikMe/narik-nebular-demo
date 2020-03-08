import { Component, Injector } from "@angular/core";
import { NarikBaseTemplate } from "@narik/core";
import { NarikUiDetailForm } from "@narik/ui-nebular";
import { DynamicForm } from "@narik/core";

@DynamicForm("GeneralDetailComponent")
@NarikBaseTemplate("NarikDetailUi")
@Component({
  templateUrl: "general-detail.component.html"
})
export class GeneralDetailComponent extends NarikUiDetailForm<any> {
  static readonly COMPONENT_NAME = "GeneralDetailComponent";

  constructor(injector: Injector) {
    super(injector);
  }
}
