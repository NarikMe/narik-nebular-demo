import { Component, Injector } from "@angular/core";
import { NarikBaseTemplate } from "@narik/core";
import { NarikUiEditForm } from "@narik/ui-nebular";
import { DynamicForm } from "@narik/core";

@DynamicForm("GeneralEditComponent")
@NarikBaseTemplate("NarikEditUi")
@Component({
  templateUrl: "general-edit.component.html"
})
export class GeneralEditComponent extends NarikUiEditForm<any> {
  static readonly COMPONENT_NAME = "GeneralEditComponent";

  constructor(injector: Injector) {
    super(injector);
  }
}
