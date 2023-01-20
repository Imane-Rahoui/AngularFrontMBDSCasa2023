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
  // pour la pagination
  page=1;
  limit=10;
  totalPages=0;
  totalDocs = 0;
  hasNextPage = false;
  hasPrevPage = false;
  nextPage = 0;
  prevPage = 0;

  // pour data table
  displayedColumns: string[] = ['nom', 'dateDeRendu', 'rendu'];

  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit() {
    console.log('AVANT AFFICHAGE');

    this.getAssignments();
  }

  getAssignments() {
    // On va demander au service de gestion des assignments
    // de nous fournir la liste des assignments
    //this.assignments = this.assignmentsService.getAssignments();
    this.assignmentsService.getAssignmentsAvecPagination(this.page, this.limit)
    .subscribe(data => {
      this.assignments = data.docs;
      this.totalPages = data.totalPages;
      this.totalDocs = data.totalDocs;
      this.hasNextPage = data.hasNextPage;
      this.hasPrevPage = data.hasPrevPage;
      this.nextPage = data.nextPage;
      this.prevPage = data.prevPage;
    });
  }

  assignmentClique(a: Assignment) {
    console.log('On a cliqué sur :' + a.nom);
    this.assignmentSelectionne = a;
  }

  pagePrecedente() {
    this.page--;
    this.getAssignments();
  }

  pageSuivante() {
    this.page++;
    this.getAssignments();
  }

  dernierePage() {
    this.page = this.totalPages;
    this.getAssignments();
  }

  premierePage() {
    this.page = 1;
    this.getAssignments();
  }

  paginator(event: any) {
    console.log(event);
    this.page = event.pageIndex+1;
    this.limit = event.pageSize;

    this.getAssignments();
  }
}
