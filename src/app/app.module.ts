import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './components/app/app.component';
import { HelloWorldComponent } from './components/helloworld/helloworld.component';

// Services
import { CounterService } from './services/CounterService';
import { WindowRef } from './services/WindowRef';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  entryComponents: [HelloWorldComponent],
  providers: [CounterService, WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
