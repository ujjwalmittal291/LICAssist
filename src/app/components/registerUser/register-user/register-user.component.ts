import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private userAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  async onSubmit(form: NgForm) {
    const { email, password, firstName, lastName } = form.value;
    console.log('email : ' + email + '\nPassword : ' + password + '\nFirst Name : ' + firstName + '\nLast Name : ' + lastName);
    try {
      const resp = await this.userAuth.createUserWithEmailAndPassword(email, password);
      await resp.user.updateProfile({displayName:`${firstName} ${lastName}`});
      form.reset(); //Reset after completion
    } catch (error) {
      console.log(error.message);
      
    }
  }

}
