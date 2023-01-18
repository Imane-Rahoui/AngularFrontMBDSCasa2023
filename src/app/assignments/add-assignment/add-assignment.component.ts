import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {
  // champs de formulaire
  nomDevoir="";
  dateDeRendu?:Date=undefined;

  constructor(private assignmentsService: AssignmentsService,
              private router:Router) { }

  onSubmit(event:any) {
    console.log(this.nomDevoir + " date de rendu : " + this.dateDeRendu);
    if((!this.nomDevoir) || (!this.dateDeRendu)) return;

    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;

    // On demande au service d'ajouter l'assignment à la BD
    this.assignmentsService.addAssignment(newAssignment)
    .subscribe((message) => {
      console.log(message);

      // et on navigue vers la page d'accueil
      this.router.navigate(['/home']);
    });
  }
}
