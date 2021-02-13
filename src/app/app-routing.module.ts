import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from '../app/components/registerUser/register-user/register-user.component';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/userLogin/user-login/user-login.component'
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PolicymasterComponent } from './components/policymaster/policymaster.component';
import { AddmenuComponent } from './components/addmenu/addmenu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'userLogin', component: UserLoginComponent },
  { path: 'policymaster', component: PolicymasterComponent },
  { path: 'userprofile/:id', component: UserProfileComponent },
  { path: 'addmenu', component: AddmenuComponent }
];

@NgModule({
  // Old statement
  // imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  // New statement
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
