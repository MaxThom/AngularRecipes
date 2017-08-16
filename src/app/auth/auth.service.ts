import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) { }

  SignupUser(email: string, password: string) {
    console.log('New user : ' + email + '///' + password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then()
      .catch(
        (error) => {console.log(error)}
      );
  }

  SigninUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token) => {
                this.token = token
              })
            .catch(
              (error) => {
                console.log(error)
              })
        })
      .catch(
        (error) => {console.log(error)}
      );
  }

  GetToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token) => {
          this.token = token
        })
      .catch(
        (error) => {
          console.log(error)
        })

    return this.token;
  }

  IsAuthenticated(): boolean {
    return this.token != null;
  }

  LogOut() {
    firebase.auth().signOut();
    this.token = null;
  }

}
