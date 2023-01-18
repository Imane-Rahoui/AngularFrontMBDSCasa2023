import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent {
  @Input() assignmentTransmis?: Assignment = undefined;
  @Output() deleteAssignment = new EventEmitter<Assignment>();

  constructor(private assignmentsService: AssignmentsService) {}

  onAssignmentRendu() {
    if (!this.assignmentTransmis) return;

    this.assignmentTransmis.rendu = true;

    // On utilise le service pour modifier la base de données...
    this.assignmentsService
      .updateAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);
      });
  }

  onDelete() {
    // On va envoyer un événement au parent
    if (!this.assignmentTransmis) return;

    // On envoie un message au parent pour qu'il supprime l'assignment
    // du tableau
    this.deleteAssignment.emit(this.assignmentTransmis);

    // on cache le détail de l'assignment (car il y a un *ngIf)
    this.assignmentTransmis = undefined;
  }
}
