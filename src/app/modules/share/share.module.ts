import { NbCardModule } from "@nebular/theme";
import { COMPONENTS } from "./index";
import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NarikSwimlaneDataTableModule } from "narik-ui-swimlane";
import { NarikUiNebularModule } from "narik-ui-nebular";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NarikUiNebularModule,
    NarikSwimlaneDataTableModule,
    NbCardModule
  ],
  declarations: [COMPONENTS],
  exports: [],
  providers: [],
  entryComponents: [COMPONENTS]
})
export class ShareModule {}
