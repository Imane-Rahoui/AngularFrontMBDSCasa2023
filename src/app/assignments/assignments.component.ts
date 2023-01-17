import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  formVisible=false;

  assignmentSelectionne?:Assignment=undefined;

  ngOnInit() {
    console.log("AVANT AFFICHAGE");
/*
    setTimeout(() => {
      this.ajoutDesactive = false;
    }, 3000)
    */
  }

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

  assignmentClique(a:Assignment) {
    console.log("On a cliqué sur :" + a.nom);
    this.assignmentSelectionne = a;
  }

  ajouterAssignment(a:Assignment) {
    // On ajoute l'assignment envoyé par le fils
    // dans le tableau des assignments
    this.assignments.push(a);

    // On cache le formulaire et on affiche la liste
    this.formVisible = false;
  }
}
