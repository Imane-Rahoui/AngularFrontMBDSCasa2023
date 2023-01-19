import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent implements OnInit {
  assignmentTransmis?: Assignment = undefined;

  constructor(private assignmentsService: AssignmentsService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private authService:AuthService) {}

  ngOnInit() {
    console.log('DETAILS AVANT AFFICHAGE');

    // on récupère l'id dans l'URL (dans la route)
    // Le '+' devant this.activatedRoute.snapshot.params['id']
    // permet de convertir la valeur string en number
    const id = +this.activatedRoute.snapshot.params['id'];
    console.log("id = " + id);
    console.log("type de id : " + typeof(id));

    // Juste pour montrer comment faire, je vais afficher les
    // query params dans la console (ce qui suit le ? dans l'URL)
    // ex : http://localhost:4200/assignments/1?
    const queryParams = this.activatedRoute.snapshot.queryParams;
    console.log(queryParams);

    // ici pour récupérer les fragments (ce qui suit le # dans l'URL)
    // ex : http://localhost:4200/assignments/1#fragment
    const fragment = this.activatedRoute.snapshot.fragment;
    console.log(fragment);

    // On demande au service de gestion des assignments
    // de nous fournir l'assignment correspondant à l'id
    this.assignmentsService.getAssignment(id)
    .subscribe((assignment) => {
      this.assignmentTransmis = assignment;
    });
  }

  onAssignmentRendu() {
    if (!this.assignmentTransmis) return;

    this.assignmentTransmis.rendu = true;

    // On utilise le service pour modifier la base de données...
    this.assignmentsService
      .updateAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);

        // on navigue vers la page d'accueil
        let x = "toto"
        this.router.navigate(['/home']);
      });
  }

  onDelete() {
    // On va envoyer un événement au parent
    if (!this.assignmentTransmis) return;

    // On va demander au service de gestion des assignments de supprimer
    // l'assignment courant
    this.assignmentsService
      .deleteAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);

        // on cache le détail de l'assignment (car il y a un *ngIf)
        this.assignmentTransmis = undefined;

        // on navigue vers la page d'accueil
        this.router.navigate(['/home']);
      });
  }

  isAdmin():boolean {
    return this.authService.loggedIn;
  }
}
