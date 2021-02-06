import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


// Custom Components
import { CurrentCalenderComponent } from './components/current-calender/current-calender.component';
import { RegisterUserComponent } from './components/registerUser/register-user/register-user.component';
import { UserLoginComponent } from './components/userLogin/user-login/user-login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

// Custom Services
import { GenerateTimeService } from './services/generateTimeService/generate-time.service';
import { DateService } from './services/dateService/date.service';
import { RegisterUserService } from './services/authenticationServices/register-user.service';
@NgModule({
  declarations: [
    AppComponent,
    CurrentCalenderComponent,
    RegisterUserComponent,
    UserLoginComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    GenerateTimeService,
    DateService,
    RegisterUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
