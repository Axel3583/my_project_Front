import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) { }

  // Login methode
  login(username: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(username, password).then(() => {
      localStorage.setItem('token', 'true')
      this.router.navigate(["/home"])
    }, err => {
      alert('Something wrong')
      this.router.navigate(["/"])
    })
  }

  // Register methode
  register(username: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(username, password).then(() => {
      alert('Registration Successfully !')
      this.router.navigate(["/login"])
    }, err => {
      alert('Something wrong')
      this.router.navigate(["/register"])
    })
  }

  // Sign Out
  logout() {
    this.angularFireAuth.signOut().then(() => {
      localStorage.removeItem('token')
      this.router.navigate(["/login"])
    }, err => {
      alert(err.message);
    })
  }
}
