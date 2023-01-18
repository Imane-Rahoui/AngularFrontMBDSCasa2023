import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  constructor(private loggingService:LoggingService) {}

  assignments:Assignment[] = [
    {
      id:1,
      nom: "Devoir Angular de Mr Buffa",
      dateDeRendu : new Date("2022-01-25"),
      rendu : false
    },
    {
      id:2,
      nom: "Devoir R de Mr Pasquier",
      dateDeRendu : new Date("2022-02-26"),
      rendu : false
    },
    {
      id:3,
      nom: "Devoir MongoDB de Mr MOPOLO",
      dateDeRendu : new Date("2022-01-6"),
      rendu : true
    }
  ];

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  // Un get assignment par id
  getAssignment(id:number):Observable<Assignment|undefined> {
    const assignment = this.assignments.find((a) => a.id === id);

    return of(assignment);
  }

  addAssignment(a:Assignment):Observable<string> {
    a.id = Math.floor(Math.random()*100000000000000000);

    this.assignments.push(a);

    this.loggingService.log(a.nom, "ajouté");

    return of("Assignment ajouté");
  }

  updateAssignment(a:Assignment):Observable<string> {
    // On envoie une requete HTTP PUT pour modifier l'assignment

    this.loggingService.log(a.nom, "modifié");

    return of("Assignment modifié");
  }

  deleteAssignment(a:Assignment):Observable<string> {
    // On envoie une requete HTTP DELETE pour supprimer l'assignment
    const pos = this.assignments.indexOf(a);
    const nbElementASupprimer = 1;

    this.assignments.splice(pos, nbElementASupprimer);

    this.loggingService.log(a.nom, "supprimé");

    return of("Assignment supprimé");
  }

}
