import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './agilebot/main/main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NbChatModule,NbThemeModule } from '@nebular/theme';
import { ChatComponent } from './agilebot/components/chat/chat.component';

import {DemoMaterialModule} from './material-module';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    DemoMaterialModule,
    NbChatModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
