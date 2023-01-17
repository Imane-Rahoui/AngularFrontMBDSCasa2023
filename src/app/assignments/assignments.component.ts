import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  // champs de formulaire
  nomDevoir="";
  dateDeRendu?:Date=undefined;

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

  onSubmit(event:any) {
    console.log(this.nomDevoir + " date de rendu : " + this.dateDeRendu);
    if((!this.nomDevoir) || (!this.dateDeRendu)) return;

    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment);

  }
}
