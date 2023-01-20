import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion de devoirs à rendre...';

  constructor(private authService:AuthService,
              private router:Router,
              private assignmentsService:AssignmentsService) {}

  login() {
    if(this.authService.loggedIn) {
      this.authService.logOut();
      // et on revient à la page d'accueil
      this.router.navigate(['/home']);
    } else {
      this.authService.logIn();
    }
  }

  peuplerBD() {
    // on appelle la méthode peuplerBD() du service
    // de gestion des assignments
    this.assignmentsService.peuplerBDavecForkJoin()
    .subscribe(() => {
      console.log("TOUTES LES DONNEES DE TEST ONT ETE AJOUTEES");

      // et on affiche la liste à jour
      this.router.navigate(['/home']);
    })
  }
}
