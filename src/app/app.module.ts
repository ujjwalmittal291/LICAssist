import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore/';


// Custom Components
import { CurrentCalenderComponent } from './components/current-calender/current-calender.component';
import { RegisterUserComponent } from './components/registerUser/register-user/register-user.component';
import { UserLoginComponent } from './components/userLogin/user-login/user-login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

// Custom Services
import { GenerateTimeService } from './services/generateTimeService/generate-time.service';
import { DateService } from './services/dateService/date.service';
import { UserAuthService } from './services/authenticationServices/userAuth.service';
import { PolicymasterComponent } from './components/policymaster/policymaster.component';
import { MonthlystatusComponent } from './components/monthlystatus/monthlystatus.component';
import { AddmenuComponent } from './components/addmenu/addmenu.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchqueryComponent } from './components/searchquery/searchquery.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentCalenderComponent,
    RegisterUserComponent,
    UserLoginComponent,
    UserProfileComponent,
    PolicymasterComponent,
    MonthlystatusComponent,
    AddmenuComponent,
    MenubarComponent,
    DashboardComponent,
    SearchqueryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    //Initializes firebase connection with the config data present in environment file.
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    GenerateTimeService,
    DateService,
    UserAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
