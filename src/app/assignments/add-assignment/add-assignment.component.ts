import { Component, EventEmitter, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  // champs de formulaire
  nomDevoir="";
  dateDeRendu?:Date=undefined;

  onSubmit(event:any) {
    console.log(this.nomDevoir + " date de rendu : " + this.dateDeRendu);
    if((!this.nomDevoir) || (!this.dateDeRendu)) return;

    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;

    //this.assignments.push(newAssignment);
    // On emmet un événement vers le père.
    // Cet événement a pour nom la variable du @Output()
    this.nouvelAssignment.emit(newAssignment);
  }
}
