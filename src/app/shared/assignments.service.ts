import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      nom: "Devoir Angular de Mr Buffa",
      dateDeRendu : new Date("2022-01-25"),
      rendu : false
    },
    {
      nom: "Devoir R de Mr Pasquier",
      dateDeRendu : new Date("2022-02-26"),
      rendu : false
    },
    {
      nom: "Devoir MongoDB de Mr MOPOLO",
      dateDeRendu : new Date("2022-01-6"),
      rendu : true
    }
  ];
  constructor() { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(a:Assignment):Observable<string> {
    this.assignments.push(a);
    return of("Assignment ajouté");
  }

  updateAssignment(a:Assignment):Observable<string> {
    // On envoie une requete HTTP PUT pour modifier l'assignment
    
    return of("Assignment modifié");
  }

}
