import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AsgardeoAuthModule } from "@asgardeo/auth-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AsgardeoAuthModule.forRoot({
      clientID: "t3kqmbSrpstIjsjy99r7X4uMbJIa",
      baseUrl: "https://api.asgardeo.io/t/wso2productmanagement",
      signInRedirectURL: "https://localhost:5000",
      signOutRedirectURL: "https://localhost:5000",
      scope: ["openid","profile"]
  }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
