import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,
              private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // si ça renvoie true ça dit que l'utilisateur peut accéder à la page
      // demandée par la route associée à ce guard
      return this.authService.isAdmin()
        .then((admin) => {
          if (admin) {
            console.log('NAVIGATION AUTORISEE, vous êtes admin');
            return true;
          } else {
            // on revient à la page d'accueil, mais on devrait
            // plutôt rediriger vers une page d'erreur
            console.log("NAVIGATION NON AUTORISEE, vous n'êtes pas admin");
            this.router.navigate(['/home']);
            return false;
          }
        });
  }

}
