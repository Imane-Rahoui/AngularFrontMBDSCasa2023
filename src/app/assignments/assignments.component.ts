import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {

  assignments = [
    {
      nom: "Devoir Angular de Mr Buffa",
      dateDeRendu : "2022-01-25",
      rendu : false
    },
    {
      nom: "Devoir R de Mr Pasquier",
      dateDeRendu : "2022-02-26",
      rendu : false
    },
    {
      nom: "Devoir MongoDB de Mr MOPOLO",
      dateDeRendu : "2022-01-6",
      rendu : true
    }
  ];
}
