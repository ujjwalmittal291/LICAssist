import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
// import { loginDetails } from '../../models/login.model';
import { Router } from '@angular/router';
import { userProfileData } from '../../models/data.model';
import { FirestoreService } from '../firestoreService/firestore.service';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(
    private userAuth: AngularFireAuth,
    private router: Router,
    // private ngFireService : AngularFirestore,
    private FireService : FirestoreService
  ) { }

  // Logout Method
  logout() {
    const resp = this.userAuth.signOut().then(() => {
      // this.router.navigate(['']);
      alert('Logged out successfully');
    });
    console.log(resp);
  }

  // Login Method
  async login(form: any) {
    const { email, password } = form.value;
    console.log('email : ' + email + '\nPassword : ' + password);
    try {
      const resp = await this.userAuth.signInWithEmailAndPassword(email, password);
      form.reset(); //Reset after completion
      const uid = resp.user.uid;
      console.log('Current User Id : ' + uid);
      this.router.navigate([`/userprofile/${uid}`]); //Routes to profile page upon successful login
      console.log(resp.user.metadata);
    } catch (error) {
      console.log(error.message);
      if (error.code = 'auth/invalid-email') {
        alert(error.message);
      }
    }
  }


  // User Registration
  async registerUser(form: any) {
    const { email, password, firstName, lastName } = form.value;
    console.log('email : ' + email + '\nPassword : ' + password + '\nFirst Name : ' + firstName + '\nLast Name : ' + lastName);
    try {
      const resp = await this.userAuth.createUserWithEmailAndPassword(email, password);
      await resp.user.updateProfile({ displayName: `${firstName} ${lastName}` });
      await this.FireService.createUserProfile(resp.user); //Src:
      // form.reset(); //Reset after completion
      alert('Success');
      this.router.navigate([`/`]); //Routes to home page upon successful registration
    } catch (error) {
      console.log(error.message);
      if (error.code = 'auth/invalid-email') {
        alert(error.message);
      }
    }
  }

  // Moved to firestore Service
  // createUserProfile(response: any) {
  //   const userProfile: userProfileData = {
  //     name: response.displayName,
  //     email: response.email,
  //     uid: response.uid
  //   }
    
  //   // Write to cloud store
  //   return this.ngFireService.doc(`users/${userProfile.uid}`).set(userProfile);
  // }

}
