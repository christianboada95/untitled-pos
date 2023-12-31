import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { Token, User } from '@shared/models/user';

const token: Token = {
  jwt: '',
  user: {
    provider: '',
    confirmed: false,
    blocked: false,
    create_at: undefined,
    update_at: undefined,
    role: {
      id: 0,
      name: '',
      description: '',
      type: ''
    },
    id: 0,
    username: '',
    email: ''
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const url: string = route.path;
    console.log('Url:' + url);
    const currentUser = this.authService.currentUserValue ?? token;
    if (currentUser.user.role.type === 'authenticated') {
        // logged in so return true
        return true;
    }

    alert('You are not authorised to visit this page');
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
        // logged in so return true
        return true;
    }
    console.log("redirect to login")
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }


}
