import { NarikCommonModule } from "narik-common";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { COMPONENTS } from "./index";
import { ChangePassComponent } from "./change-password/change-password.component";
import { NbLayoutModule } from "@nebular/theme";
import {
  NarikNebularInputModule,
  NarikNebularButtonModule,
  NarikNebularBusyIndicatorModule
} from "narik-ui-nebular";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule.forChild(),
    FormsModule,
    NarikNebularInputModule,
    NarikNebularButtonModule,
    NarikNebularBusyIndicatorModule,
    NarikCommonModule,
    NbLayoutModule
  ],
  declarations: [COMPONENTS],
  exports: [],
  providers: [],
  entryComponents: [ChangePassComponent]
})
export class MainModule {}
