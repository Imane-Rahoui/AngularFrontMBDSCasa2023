import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }

  // Normalement on devrait passer un login et un password
  // on devrait se connecter à une BD ou à un web service
  // pour vérifier si le login et le password sont corrects
  // etc...
  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  // Methode qui dit si on est admin (pour le moment il suffit d'être loggé)
  // sous la forme d'une promesse. On devrait l'utiliser comme ceci :
  // isAdmin.then(admin => {...}), mais c'est le framework angular
  // qui va faire ça pour nous
  isAdmin() {
    let promesse = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });

    return promesse;
    //return this.loggedIn;
  }


}
