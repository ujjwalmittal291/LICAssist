import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserAuthService } from '../../../services/authenticationServices/userAuth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(public userAuth: UserAuthService) { }

  ngOnInit(): void {
  }

  // This method is migrated authentication Services 
  // async onSubmit(form: NgForm) {
  //   const { email, password } = form.value;
  //   console.log('email : ' + email + '\nPassword : ' + password);
  //   try {
  //     const resp = await this.userLogin.signInWithEmailAndPassword(email, password);
  //     form.reset(); //Reset after completion
  //     const uid = resp.user.uid;
  //     console.log('Current User Id : ' + uid);
  //     this.router.navigate([`/userprofile/${uid}`]); //Routes to profile page upon successful login
  //     console.log(resp.user.metadata);
  //   } catch (error) {
  //     console.log(error.message);
  //     if (error.code = 'auth/invalid-email') {
  //       alert(error.message);
  //     }
  //   }
  // }

}
