import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { AuthGuardGuard } from './service/auth-guard.guard';
import { DeactivateGuardGuard } from './service/deactivate-guard.guard';
const routes: Routes = [
   {
    path:"home",
    component:DashboardComponent,
    canActivate:[AuthGuardGuard]
   },
   {
    path:"", redirectTo:"/home", pathMatch:"full"
   },
   {
    path:"note-detail/:id",
    component:NoteDetailsComponent,
    canActivate:[AuthGuardGuard],
    canDeactivate:[DeactivateGuardGuard]
   },
   {
      path:'login',
      component:LoginComponent
   },
   {
    path:"**",
    component:NotFoundComponentComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
