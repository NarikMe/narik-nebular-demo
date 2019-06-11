import { Component, Inject, Renderer2 } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  isOnNavigation = false;
  constructor(
    router: Router,
    themeService: NbThemeService,
    renderer: Renderer2,
    @Inject(DOCUMENT) private document
  ) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.isOnNavigation = true;
      } else if (event instanceof NavigationEnd) {
        this.isOnNavigation = false;
      }
    });

    themeService.onThemeChange().subscribe((theme: any) => {
      const body = this.document.getElementsByTagName("body")[0];
      if (theme.previous) {
        renderer.removeClass(body, `nb-theme-${theme.previous}`);
      }
      renderer.addClass(body, `nb-theme-${theme.name}`);
    });
  }
}
