import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css'],
})
export class AssignmentsComponent implements OnInit {
  formVisible = false;
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

  ajouterAssignment(a: Assignment) {
    // On ajoute l'assignment envoyé par le fils
    // dans le tableau des assignments
    //this.assignments.push(a);
    this.assignmentsService.addAssignment(a).subscribe((message) => {
      console.log(message);

      console.log("AJOUT EFFECTUE")

      // On cache le formulaire et on affiche la liste. On le fait dans
      // le subscribe pour être certain que la liste affichée soit à jour
      this.formVisible = false;
    });

    console.log("AJOUT DEMANDE")
  }

  onDeleteAssignment(a: Assignment) {
    // On supprime l'assignment envoyé par le fils du tableau
    const pos = this.assignments.indexOf(a);
    const nbElementsASupprimer = 1;

    this.assignments.splice(pos, nbElementsASupprimer);
  }
}
