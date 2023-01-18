import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  assignmentSelectionne?: Assignment = undefined;
  assignments: Assignment[] = [];

  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit() {
    console.log('AVANT AFFICHAGE');

    // On va demander au service de gestion des assignments
    // de nous fournir la liste des assignments
    //this.assignments = this.assignmentsService.getAssignments();
    this.assignmentsService.getAssignments().subscribe((assignments) => {
      this.assignments = assignments;
    });
  }

  assignmentClique(a: Assignment) {
    console.log('On a cliqué sur :' + a.nom);
    this.assignmentSelectionne = a;
  }
}
