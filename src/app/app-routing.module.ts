import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from '../app/components/registerUser/register-user/register-user.component';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/userLogin/user-login/user-login.component'



const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'registerUser', component: RegisterUserComponent },
  { path: 'userLogin', component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
