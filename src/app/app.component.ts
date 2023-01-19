import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion de devoirs à rendre...';

  constructor(private authService:AuthService,
              private router:Router) {}

  login() {
    if(this.authService.loggedIn) {
      this.authService.logOut();
      // et on revient à la page d'accueil
      this.router.navigate(['/home']);
    } else {
      this.authService.logIn();
    }
  }
}
