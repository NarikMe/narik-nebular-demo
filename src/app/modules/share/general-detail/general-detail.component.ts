import { Component, Injector } from "@angular/core";
import { NarikBaseTemplate } from "narik-core";
import { NarikUiDetailForm } from "narik-ui-nebular";

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
