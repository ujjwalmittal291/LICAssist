import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentCalenderComponent } from './components/current-calender/current-calender.component';
import { DateService } from './services/dateService/date.service';
import { GenerateTimeService } from './services/generateTimeService/generate-time.service';



@NgModule({
  declarations: [
    AppComponent,
    CurrentCalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    GenerateTimeService,
    DateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
