import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NoteDetailsComponent } from '../note-details/note-details.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardGuard implements CanDeactivate<NoteDetailsComponent>{
  canDeactivate(
    component:NoteDetailsComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate?component.canDeactivate():false;
  }
}
