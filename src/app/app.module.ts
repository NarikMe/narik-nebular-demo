import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import {
  ConfigService,
  MODULE_DATA_KEY,
  MODULE_UI_KEY,
  ModuleInfo
} from "@narik/infrastructure";
import {
  NarikCoreModule,
  NarikTranslateLoader,
  MEMORY_STORAGE_VALIDITY_LEN,
  NarikModule
} from "@narik/core";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NarikUiCoreModule } from "@narik/ui-core";
import { NarikAppCoreModule } from "@narik/app-core";
import { NarikJwtAuthenticationModule } from "@narik/jwt-authentication";
import { NarikClientStorageModule } from "@narik/client-storage";

import { NbLayoutDirection, NbThemeModule, NbIconModule } from "@nebular/theme";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainModule } from "./modules/main/main.module";
import { Observable } from "rxjs/internal/Observable";
import { DemoCommandProcessor } from "./services/command-processor.service";
import { NbDateFnsDateModule } from "@nebular/date-fns";

const moduleKey = "NarikDemo";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient, ConfigService]
      }
    }),
    NarikCoreModule.forRoot({
      configFilePath: "assets/app-config.json",
      defaultLang: "en",
      useDefaultLang: true,
      commandProcessor: DemoCommandProcessor
    }),
    NarikUiCoreModule,
    NarikAppCoreModule.forRoot({}),
    NarikJwtAuthenticationModule.forRoot({
      loginEndPoint: "/api/account/Authenticate",
      logoutEndPoint: "/api/account/Logout",
      refreshEndPoint: "/api/account/Authenticate",
      tokenStorage: "localStorage",
      loginPageUrl: "/"
    }),
    NbEvaIconsModule,
    NbIconModule,
    NbThemeModule.forRoot(
      { name: "default" },
      undefined,
      undefined,
      NbLayoutDirection.LTR
    ),
    NbDateFnsDateModule.forRoot({
      format: "yyyy/MM/dd",
      parseOptions: { awareOfUnicodeTokens: true },
      formatOptions: { awareOfUnicodeTokens: true }
    }),
    BrowserAnimationsModule,
    MainModule,
    NarikClientStorageModule.forRoot()
  ],
  providers: [
    {
      provide: MODULE_DATA_KEY,
      useValue: moduleKey
    },
    {
      provide: MODULE_UI_KEY,
      useValue: moduleKey
    },
    {
      provide: MEMORY_STORAGE_VALIDITY_LEN,
      useValue: 1
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule extends NarikModule {
  constructor(injector: Injector) {
    super(injector);
  }

  get key() {
    return moduleKey;
  }
  get moduleInfo(): Observable<ModuleInfo> {
    return this.loadInfoFromJson();
  }
}

export function HttpLoaderFactory(
  http: HttpClient,
  configService: ConfigService
) {
  return new NarikTranslateLoader(http, configService, ["app"]);
}
