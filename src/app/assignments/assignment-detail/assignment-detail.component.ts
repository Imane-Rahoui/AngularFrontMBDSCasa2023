import { Component, Input } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  @Input() assignmentTransmis?:Assignment=undefined;

  onAssignmentRendu() {
    if(!this.assignmentTransmis) return;
    
      this.assignmentTransmis.rendu = true;
  }
}
