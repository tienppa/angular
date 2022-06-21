import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RequestInterceptor } from './shared/interceptor/request.interceptor';
import { ResponseInterceptor } from './shared/interceptor/response.interceptor';

import { LayoutComponent } from './shared/components/layout/layout.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

const declarations = [
  AppComponent,
  LayoutComponent,
  SidebarComponent,
  NavbarComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: RequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: ResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
