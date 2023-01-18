import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  // On va créer une méthode qui va nous permettre d'afficher un message
  // dans la console avec le nom de l'assignment et l'action effectuée
  // (créé, supprimé, modifié, etc.))
  log(assignmentName: string, action:string) {
    console.log(`LOGGIN SERVICE Assignment ${assignmentName} a été ${action}`);
  }
}
